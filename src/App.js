import './App.css';
import Container from '@mui/material/Container';
import Header from './Header';
import EmptySeach from './EmptySearch';

function App() {
  const searchValue = 'Dog';

  return (
    <Container maxWidth="lg">
      <Header />
      <main>
        <EmptySeach searchValue={searchValue} />
      </main>
    </Container>
  );
}

export default App;
