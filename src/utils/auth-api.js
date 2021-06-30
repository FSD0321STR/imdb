import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:8000/",
})


api.interceptors.request.use(config => {
    let token = localStorage.getItem("token") || "";
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
})

const API_URL = 'http://localhost:8000';


const login = ({ email, password }) => {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    }).then(res => res = res.json())
        .catch(error => console.error('Error:', error))
}

const register = ({ email, password, fname, lname }) => {
    return fetch(`${API_URL}/register`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, fname, lname })
    }).then(res => res = res.json())
        .catch(error => console.error('Error:', error))
}

const userUpdate = ({ user }) => {
    return fetch(`${API_URL}/user/` + user._id, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(res => res = res.json())
        .catch(error => console.error('Error:', error))
}

export default {
    login,
    register,
    userUpdate
}