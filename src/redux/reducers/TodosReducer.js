
import * as _ from 'lodash'
export default function (state = { todos: [] }, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'GET_TOTOS':
            { return state }
        case 'GET_TODOS_SUCCESS': {
            let currentTodos = _.chunk(action.todos, 10);
            return { ...state, todos: currentTodos }
        }
        case 'UPDATE_TODO': {
            return state;
        }
        case 'UPDATE_TODO_SUCCESS': {
            return { ...state, todo: action.todo };
        }
        case 'RESET_TODOS': {
            return { ...state, todos: [] };
        }

        case 'RESET_TODO': {
            return { ...state, todo: null };
        }
    }
    return state
}