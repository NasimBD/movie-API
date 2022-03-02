import './App.css';
import {useEffect, useState} from 'react';
import Movie from './components/Movie';
import IMG from './film-reel.png';

const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
   fetchData(API);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if(searchKey){
      fetchData(SEARCH_API + searchKey);
      setSearchKey('');
    }
  }

  const onChangeHandler = (e) => {
    setSearchKey(e.target.value.trim());
  }

  const fetchData = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }

  return (
    <>
     <header>
       <img src={IMG} id="reel" alt="reel" onClick={() => {fetchData(API)}}/>
       <form onSubmit={submitHandler} id="searchFrm">
        <input type="text" value={searchKey} placeholder="Search..." onChange={onChangeHandler}></input>
       </form>
     </header>
     <div className="container">
      <div className="movies">
  {
          movies.length > 0 ?
          movies.map((movie, indx) => 
          <Movie
          key = {indx}
          poster_path = {movie.poster_path}
          original_title = {movie.original_title}
          overview = {movie.overview}
          vote_average = {movie.vote_average} 
          />)
          :
          <p> <br/> <br/> <br/><br/><br/><br/><br/><br/>No results for this search.</p>
        }
      </div>
    </div>
    </>
  );
}

export default App;
