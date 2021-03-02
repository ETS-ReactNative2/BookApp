import {createStore} from 'redux'
import blogReducer from './booksApp'

const store = createStore(blogReducer)

export default store