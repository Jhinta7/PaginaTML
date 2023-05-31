import axios from 'axios';

const http = axios.create({
    baseURL:"http://localhost:3000/"
})

export class ApiService {
    getAll() {
        return http.get('/posts');
    }
    getById(id) {
        return http.get(`/posts/${id}`);
    }
    create(data) {
        return http.post('/posts', data);
    }
    update(id, data) {
        return http.put(`/posts/${id}`, data);
    }
    delete(id) {
        return http.delete(`/posts/${id}`);
    }
    findByTitle(title) {
        return http.get(`/posts?title=${title}`);
    }
}