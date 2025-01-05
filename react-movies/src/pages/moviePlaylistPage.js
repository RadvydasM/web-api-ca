import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { AuthContext } from "../contexts/authContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylist";
import { Navigate, useLocation } from "react-router-dom";

const MoviePlaylistPage = () => {
  const { playlist: movieIds } = useContext(MoviesContext);
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  // Redirect to login if not authenticated
    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} />;
    }

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Personal Playlist"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylist movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MoviePlaylistPage;