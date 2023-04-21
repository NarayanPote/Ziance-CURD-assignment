import axios from 'axios';

let baseURL = "http://localhost:8080/api/tutorials"

export default axios.create({
    baseURL
});