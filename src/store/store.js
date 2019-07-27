import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { compose } from 'redux'
import userReducer from '../reducers/userReducer'
import { saveState } from './localStorage'
import { throttle } from 'lodash'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)))
store.subscribe(
	throttle(() => {
		saveState(store.getState())
	}, 1000)
)

export default store
