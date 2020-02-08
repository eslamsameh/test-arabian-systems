
import { put, call } from 'redux-saga/effects';
import { PostServices } from '../services/post-service';
import { getPostsSuccess, insertPostSuccess } from '../redux/actions/posts.actions';

export function* getPosts() {
    const posts = yield call(PostServices.getPosts)
    yield put(getPostsSuccess({
        posts: posts.data
    }))
}

export function* insertPost(action) {
    const post = yield call(PostServices.addPost,action.post)
    yield put(insertPostSuccess({
        post: post.data
    }))
}