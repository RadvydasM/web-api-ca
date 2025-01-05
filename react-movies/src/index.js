import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import MoviePlaylistPage from "./pages/moviePlaylistPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/now_playing" element={<NowPlayingMoviesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={ <SignUpPage /> } />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/playlist" element={<MoviePlaylistPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/" element={<HomePage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/movies/" element={<MoviePage />} />
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);