import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'utils/themoviedbAPI';
import MoviesList from 'components/MoviesList';
import Paginator from 'components/Pagination';
import { Button, Form, Input } from './Movies.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
    page: 1,
  });
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query } = params;
  const page = Number(params.page);

  useEffect(() => {
    if (!query) return;
    (async () => {
      try {
        const data = await getMoviesByQuery(query, page);
        setMovies(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [query, page]);

  const handleQuerySubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (searchQuery === '') {
      e.target.reset();
      return;
    }
    setSearchParams({ query: searchQuery, page: 1 });
    e.target.reset();
  };
  return (
    <>
      <Form onSubmit={handleQuerySubmit}>
        <Input type="text" name="query" autoFocus />
        <Button type="submit">Search</Button>
      </Form>
      {movies?.results && (
        <>
          <MoviesList movies={movies.results} location={location} />
          <Paginator
            itemsPerPage={20}
            totalItems={movies.total_results}
            setSearchParams={setSearchParams}
            params={params}
          />
        </>
      )}
    </>
  );
}

export default Movies;
