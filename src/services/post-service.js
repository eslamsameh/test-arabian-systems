import axios from 'axios'
import {url} from './url-service';
export const PostServices = {
    getPosts: () => {
        const reqUrl = url.domainUrl + url.getPosts;
        var headers = {'Content-Type': 'application/json',}
        return axios.get(reqUrl, { headers: headers });
    },

    addPost: (post) => {
        const reqUrl = url.domainUrl + url.insertPost;
        var headers = {'Content-Type': 'application/json',}
        return axios.post(reqUrl, post, { headers: headers });
    },
   
}