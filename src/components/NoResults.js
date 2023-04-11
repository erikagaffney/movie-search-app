import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function NoResults({ reason }) {
  const tooManyResults = reason?.toLowerCase().includes('too many');

  return (
    <Paper sx={{ mt: 4, p: 2 }}>
      <Typography variant="h4" component="h1" color="text.secondary">
        {tooManyResults ? 'Too many results.' : 'No results found.'}
      </Typography>
      <Divider />
      {tooManyResults ? (
        <Typography variant="body1" component="p" color="text.secondary" mt={2}>
          Please narrow the search down with a more specific movie title.
        </Typography>
      ) : (
        <>
          <Typography variant="h6" component="p" color="text.secondary" mt={2}>
            You can try:
          </Typography>
          <List>
            <ListItem key="spelling">
              <Typography variant="body2" component="span">
                Making sure the movie title is spelled right.
              </Typography>
            </ListItem>
            <ListItem key="generic">
              <Typography variant="body2" component="span">
                Using more generic search terms.
              </Typography>
            </ListItem>
          </List>
        </>
      )}
    </Paper>
  );
}

export default NoResults;
