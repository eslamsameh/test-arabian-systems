import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
// create store gwah el rootReducer( combination mn el reducers kolha)
export const createStoreWithMiddleware = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

