import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function MovieRatings({ ratings }) {
  const formatRating = function ({ Value: value }) {
    value = value.replace(/[^0-9./]/g, '');
    // calculate the rating on a 5 point scale
    let [numerator, denominator] = value.includes('/')
      ? value.split('/')
      : [value, 100];

    return (numerator * 5) / denominator;
  };

  if (!ratings || ratings.length === 0) {
    return <p>No critic ratings available</p>;
  }

  return (
    <List>
      {ratings?.map((rating) => (
        <ListItem
          key={rating.Source + ' Ratings'}
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            px: 0,
            '&:first-of-type, &:last-of-type': { py: 0 }
          }}
        >
          <Typography
            component="legend"
            variant="body2"
            textAlign="center"
            px={0}
          >
            {rating.Source}
          </Typography>
          <Rating
            name="read-only"
            size="small"
            precision={0.5}
            value={formatRating(rating)}
            readOnly
          />
        </ListItem>
      ))}
    </List>
  );
}

export default MovieRatings;
