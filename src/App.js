import './App.css';
import Container from '@mui/material/Container';
import Header from './Header';
import EmptySearch from './EmptySearch';

function App() {
  const searchValue = 'Dog';

  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <Header />
      <main>
        <EmptySearch searchValue={searchValue} />
      </main>
    </Container>
  );
}

export default App;
