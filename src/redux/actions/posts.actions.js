export function getPostsAction() {
    return {
        type: 'GET_POSTS',
        posts: null
    }
}


export function getPostsSuccess(action) {
    return {
        type: 'GET_POSTS_SUCCESS',
        posts: action.posts
    }
}
export function insertPost(action) {
    return {
        type: "INSERT_POST",
        post: action.post
    }
}

export function insertPostSuccess(action) {
    return {
        type: "INSERT_POST_SUCCESS",
        post: action.post
    }
}


export function resetPost() {
    return {
        type: "RESET_POSTS",
        posts: null
    }
}

export function resetSinglePost() {
    return {
        type: "RESET_POST",
        post: null
    }
}
