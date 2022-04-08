import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import MovieTemplate from './components/MovieTemplate';
import { useEffect } from 'react';
import { setMovies, setPages } from './actions/moviesActions';


function App() {
  const movie = useSelector(state => state); // Current page
  const { currentPage, genreList, lastCall, searchInput } = movie.movieData


  const dispatch = useDispatch();

  const API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&page=${currentPage}&with_genres=${genreList}`;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&query=${searchInput}&page=${currentPage}`;

  const fetchData = async () => {
    if (lastCall === 'DISCOVER' || 'GENRE') {
      const resp = await fetch(API);
      const respJson = await resp.json();
      dispatch(setMovies(respJson.results));
      dispatch(setPages(respJson.total_pages));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      console.log(movie, lastCall)
    };
    if (lastCall === 'SEARCH') {
      const resp = await fetch(SEARCH_URL);
      const respJson = await resp.json();
      dispatch(setMovies(respJson.results));
      dispatch(setPages(respJson.total_pages));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, lastCall, genreList]);

  return (
    <>
      <MovieTemplate />
    </>
  );
}

export default App;
