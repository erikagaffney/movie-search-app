import '../../App.css';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  poster: string;
};

function MoviePoster({ poster }: Props) {
  const posterMissing = !poster || poster.toLowerCase() === 'n/a';
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const src = posterMissing ? './not-found.png' : poster;

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
        className={`movie-poster ${posterMissing ? 'missing-poster' : ''}`}
        src={src}
        role="presentation"
        alt=""
        style={imageLoading ? { display: 'none' } : {}}
        onLoad={() => setImageLoading(false)}
      />
      {posterMissing && (
        <Typography component="p" variant="body2" ml="6px">
          no image
        </Typography>
      )}
    </>
  );
}

export default MoviePoster;
