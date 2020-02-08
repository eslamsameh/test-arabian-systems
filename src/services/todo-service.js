import axios from 'axios'
import {url} from './url-service';
export const TodosServices = {
    getTodos: () => {
        const reqUrl = url.domainUrl + url.getTodos;
        var headers = {'Content-Type': 'application/json',}
        return axios.get(reqUrl, { headers: headers });
    },

    updateTodo: (todo) => {
        const reqUrl = url.domainUrl + url.updateTodo.replace("{id}", todo.id);
        var headers = {'Content-Type': 'application/json',}
        return axios.put(reqUrl, todo, { headers: headers });
    },
   
}