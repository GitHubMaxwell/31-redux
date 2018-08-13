import {createStore} from 'redux'
import reducer from '../reducer/category-reducer.js'

// export default () => {createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
export default () => {createStore(reducer)}