// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState = {searchInput: event.target.value}
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg_container">
        <div className="Card_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleImage"
          />
          <div className="search_container">
            <div className="searchlogoContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchImage"
              />
              <input
                type="search"
                className="searchInputEl"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="SearchSuggestions">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  suggestionDetails={eachItem}
                  updateSearchInput={this.updateSearchInput}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
