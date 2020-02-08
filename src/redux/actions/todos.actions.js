export function getTodosAction() {
    return {
        type: 'GET_TODOS',
        payload: null
    }
}


export function getTodosSuccess(action) {
    return {
        type: 'GET_TODOS_SUCCESS',
        todos: action.todos
    }
}
export function updateTodoAction(action) {
    return {
        type: "UPDATE_TODO",
        payload: action.todo
    }
}

export function updateTodoSuccess(action) {
    return {
        type: "UPDATE_TODO_SUCCESS",
        todo: action.data
    }
}


export function resetTodos() {
    return {
        type: "RESET_TODOS",
        todo: null
    }
}

export function resetTodo() {
    return {
        type: "RESET_TODO",
        todo: null
    }
}