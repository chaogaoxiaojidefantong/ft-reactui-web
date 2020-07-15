import {createStore,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'
const sagaMiddleware = createSagaMiddleware()
export default createStore(rootReducer,applyMiddleware(thunk,sagaMiddleware));