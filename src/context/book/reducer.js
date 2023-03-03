// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'



export default function reducer(prevState, {action, payload}) {
  if(![ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS].includes(action)) {
    return prevState
  }
  const {favoriteBooks} = prevState
  let updatedFavoriteBooks = favoriteBooks
  switch(action) {
    case ADD_BOOK:
      updatedFavoriteBooks = [...favoriteBooks, ...payload]
      saveToLocalStorage(updatedFavoriteBooks)
      return {...prevState, favoriteBooks: updatedFavoriteBooks}
    case REMOVE_BOOK:
      updatedFavoriteBooks = favoriteBooks.filter(book => book.id !== payload[0].id)
      saveToLocalStorage(updatedFavoriteBooks)
      return {...prevState, favoriteBooks: updatedFavoriteBooks}
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: payload}
    default:
        return prevState
    }
  }


// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}