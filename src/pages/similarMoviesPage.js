import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getSimilarMovies } from "../api/tmdb-api";
import { withRouter } from "react-router-dom";
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'




const SimilarMoviesPage = (props) => {
  const { id } = props.match.params;
  // console.log(id)
    const {  data, error, isLoading, isError }  = useQuery(["similar", { id: id}], getSimilarMovies);

        if (isLoading) {
            return <Spinner />
          }
        
          ;if (isError) {
            return <h1>{error.message}</h1>
          }
          const movies = data.results;

          return (
            <PageTemplate
              title="Similar Movies"
              movies={movies}
              action={(movie) => {
                return (
                <AddToWatchListIcon movie={movie} />
                )
              }}
              />
          );
            };
            export default withRouter(SimilarMoviesPage);