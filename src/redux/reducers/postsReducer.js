
import * as _ from 'lodash'
export default function (state = { posts: [] }, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'GET_POSTS':
            { return state }
        case 'GET_POSTS_SUCCESS': {
            let currentPosts = _.chunk(action.posts, 10);
            return { ...state, posts: currentPosts }
        }
        case 'INSERT_POST': {
            return state;
        }
        case 'INSERT_POST_SUCCESS': {
            var merged = [].concat.apply([], state.posts);
            merged.push(action.post);
            let currentPosts = _.chunk(merged, 10);
            return { ...state, post: action.post, posts: currentPosts };
        }
        case 'RESET_POSTS': {
            
            return { ...state, posts: [] };
        }

        case 'RESET_POST': {
            
            return { ...state, post: null };
        }
    }
    return state
}