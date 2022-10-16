import './App.css';
import {Header} from "./components/Header";
import {MoviesList} from "./components/MoviesList";
import {MoviesContainer} from "./styles/MoviesContainer";
import {MovieService} from "./services/MovieService";
import {useEffect, useState} from 'react';

function App() {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const {data} = await MovieService.getMovies();
        setMovies(data.results)
        console.log(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div className="App">
            <Header/>
            <MoviesContainer>
                <MoviesList movies={movies}></MoviesList>
            </MoviesContainer>
        </div>
    );
}

export default App;
