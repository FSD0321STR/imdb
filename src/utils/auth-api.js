import axios from 'axios';
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})


api.interceptors.request.use(config => {
    let token = localStorage.getItem("token") || "";
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
})

const API_URL = meta.env.VITE_API_URL;

/*
export async function login({ email, password }) {
    console.log(email)
    console.log(password)
    return await api.post("/login", { email, password });
}
*/

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

/*
export async function register({ email, password, fname, lname }) {
    console.log(`${fname} | ${lname}`)
    console.log(`${email} | ${password}`)
    const { data } = await api.post("/register", { email, password, fname, lname });
    return data;
}
*/

const register = ({ email, password }) => {
    return fetch(`${API_URL}/register`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    }).then(res => res = res.json())
        .catch(error => console.error('Error:', error))
}

export default {
    login,
    register,
}