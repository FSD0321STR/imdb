import axios from 'axios';
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": 'application/json'
    }
})

api.interceptors.request.use(config => {
    let token = localStorage.getItem("token") || "";
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
})

export async function login({ email, password }) {
    console.log(email)
    console.log(password)

    return await api.post("/login", { email, password });

}

export async function register({ email, password, fname, lname }) {
    console.log(`${fname} | ${lname}`)
    console.log(`${email} | ${password}`)
    const { data } = await api.post("/register", { email, password, fname, lname });
    return data;
}