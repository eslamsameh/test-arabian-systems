import { combineReducers } from 'redux';
import TodosReducer from './TodosReducer'
import PostsReducer from './postsReducer'


const rootReducer = combineReducers({
    todos: TodosReducer,
    posts: PostsReducer
})

export default rootReducer