import { environment } from "src/environments/environment";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY= environment.apiKey;
export function getTopRatedMoviesURL(page=1): string {
    return `${BASE_URL}/movie/top_rated?page=${page}&api_key=${API_KEY}`;
}   
export function getMovieDetailsURL(id: string): string {
    return `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
}