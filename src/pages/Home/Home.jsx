import { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getPopularMovies } from '../../utils/themoviedbAPI';
import Paginator from 'components/Pagination';
import MoviesList from 'components/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPopularMovies(page);
        setMovies(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [page]);

  return (
    <>
      <Title>Trending today</Title>
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
};

export default Home;
