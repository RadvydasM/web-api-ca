import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddPlaylistIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
  
    const handleAddToPlaylist = (e) => {
      e.preventDefault();
      context.addToPlaylist(movie);
    };

    return (
        <IconButton aria-label="add to Playlist" onClick={handleAddToPlaylist}>
          <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
      );
    };

    export default AddPlaylistIcon;