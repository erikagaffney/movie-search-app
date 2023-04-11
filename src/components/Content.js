import EmptySearch from './EmptySearch';
import NoResults from './NoResults';

function Content({ movies, isLoading, noResultsReason }) {
  if (!movies) {
    return <EmptySearch />;
  }
  return (
    <section>
    </section>
  );
}

export default Content;
