import axios from 'axios';

const API_KEY = 'ab46533eaac3514f935cf54850b2d96d';

const BASE_URL = 'https://api.themoviedb.org/3';

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies() {
        return axios(withBaseUrl('/movie/popular'));
    }

    static getMovie(movieId) {
        return axios(withBaseUrl(`/movie/${movieId}`))
    }
}