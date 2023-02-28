// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, {action, payload}) {
  const {favBooks} = prevState
  switch(action) {
    case ADD_BOOK:
      return {...prevState, favBooks: favBooks + 1}
    case REMOVE_BOOK:
      return {...prevState, favBooks: favBooks - 1}
    case SEARCH_BOOKS:
      return {...prevState}
      default:
        return prevState
    }
  }


// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}