import '../App.css';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';

function MoviePoster({ movie }) {
  const posterMissing = movie.Poster.toLowerCase() === 'n/a';
  const [imageLoading, setImageLoading] = useState(true);

  if (posterMissing) {
    return;
  }

  return (
    <>
      {imageLoading && (
        <Skeleton
          className="movie-poster-loader"
          animation="wave"
          height={105}
          width={68}
        />
      )}
      <img
        className="movie-poster"
        src={movie.Poster}
        alt={`Poster for ${movie.Title}`}
        style={imageLoading ? { display: 'none' } : {}}
        onLoad={() => setImageLoading(false)}
      />
    </>
  );
}

export default MoviePoster;
