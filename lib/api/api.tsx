import axios from "axios";

const api = axios.create({
    baseURL: "https://newsapi.org/v2",
})

// get news by category
export async function getNewsByCategory(category) {
    const response = await api.get(
        `/everything?q=${category}&apiKey=d284964e721645ff882dbb3cbe939777`
    );
    return response.data;
}