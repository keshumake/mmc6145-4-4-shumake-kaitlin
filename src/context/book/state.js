
const FAVORITE_BOOKS = localStorage.getItem('favoriteBooks')
const initialState = {
    favoriteBooks: FAVORITE_BOOKS !== null ? JSON.parse(FAVORITE_BOOKS) : [],
    bookSearchResults: [],
}

export default initialState