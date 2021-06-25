import axios from 'axios';
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": 'application/json'
    }
})

api.interceptors.request.use(config => {
    let token = "";
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
})

export async function login({ email, password }) {
    console.log(email)
    console.log(password)

    const { data } = await api.post("/login", { email, password });

    return data;

}

export async function register({ email, password, fname, lname }) {
    console.log(fname)
    console.log(lname)
    console.log(email)
    console.log(password)
    const { data } = await api.post("/register", { email, password, fname, lname });

    return data;
}