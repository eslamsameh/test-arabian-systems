
import { put, call } from 'redux-saga/effects';
import { getTodosSuccess, updateTodoSuccess } from '../redux/actions/todos.actions';
import { TodosServices } from '../services/todo-service';

export function* getTodos() {
    const todos = yield call(TodosServices.getTodos)
    yield put(getTodosSuccess({
        todos: todos.data
    }))
}

export function* updateTodo(action) {
    const todos = yield call(TodosServices.updateTodo,action.payload)
    yield put(updateTodoSuccess({
        data: todos.data
    }))
}