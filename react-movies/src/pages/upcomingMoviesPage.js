import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylist from '../components/cardIcons/addToPlaylist'

const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const playlist = movies.filter(m => m.playlist)
  localStorage.setItem('playlist', JSON.stringify(playlist))

  return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylist movie={movie} />
        }}
      />
  );
};
export default UpcomingMoviesPage;