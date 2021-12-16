import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'



const UpcomingMoviesPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    
        if (isLoading) {
            return <Spinner />
          }
        
          ;if (isError) {
            return <h1>{error.message}</h1>
          }  
          const movies = data.results

          const favorites = movies.filter(m => m.favorite)
          localStorage.setItem('favorites', JSON.stringify(favorites))
          

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;