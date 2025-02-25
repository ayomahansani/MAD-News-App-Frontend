import axios from "axios";

const api = axios.create({
    baseURL: "https://newsapi.org/v2",
})

// get news by category
export async function getNewsByCategory(category: string) {
    const response = await api.get(
        `/everything?q=${category}&apiKey=d284964e721645ff882dbb3cbe939777`
    );
    return response.data;
}

// get top news by country

export async function getTopNewsByCountry(country: string) {
    const response = await api.get(
        `/top-headlines?country=${country}&apiKey=d284964e721645ff882dbb3cbe939777`
    );
    return response.data;
}