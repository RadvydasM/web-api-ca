import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlaying } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylist from '../components/cardIcons/addToPlaylist'

const NowPlayingMoviesPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('Now Playing Movies', getNowPlaying)
  
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
      title='Now Playing Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylist movie={movie} />
      }}
    />
  );
};
export default NowPlayingMoviesPage;