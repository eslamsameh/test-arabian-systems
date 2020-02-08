import { all,takeLatest } from 'redux-saga/effects';
import {getTodos, updateTodo} from './todos.saga'
import { getPosts, insertPost } from './post.saga';

export default function* rootSaga() {
    yield all([
        yield takeLatest('GET_TODOS', getTodos),
        yield takeLatest('UPDATE_TODO', updateTodo),
        yield takeLatest('GET_POSTS', getPosts),
        yield takeLatest('INSERT_POST', insertPost),

    ]);
}