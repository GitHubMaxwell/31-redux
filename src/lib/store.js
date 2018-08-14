import {createStore} from 'redux'
import reducer from '../reducer/category-reducer.js'

// export default () => {createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}

// had curly braces around createStore(reducer) and it was throwing errors
// if you do put {} you have to put a return (specific to arrow functions) {return createStore(reducer)}
export default () => createStore(reducer)