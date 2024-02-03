// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="ItemsContainer">
      <p className="para">{suggestion}</p>
      <button type="button" className="btnEl" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="Arrowimage"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
