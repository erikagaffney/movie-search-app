import '../../App.css';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';

type Props = {
  poster: string;
};

function MoviePoster({ poster }: Props) {
  const posterMissing = !poster || poster.toLowerCase() === 'n/a';
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  if (posterMissing) {
    return <></>;
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
        src={poster}
        role="presentation"
        alt=""
        style={imageLoading ? { display: 'none' } : {}}
        onLoad={() => setImageLoading(false)}
      />
    </>
  );
}

export default MoviePoster;
