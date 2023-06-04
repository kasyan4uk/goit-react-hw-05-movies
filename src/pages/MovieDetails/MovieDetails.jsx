import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getMovieById } from 'utils/themoviedbAPI';
import {
  FilmTitle,
  GoBackLink,
  InfoList,
  InfoThumb,
  InfoTitle,
  Poster,
  StyledLink,
  Text,
  TextTitle,
  Wrapper,
} from './MovieDetails.styled';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  const posterPath = `https://image.tmdb.org/t/p/w300${movie?.poster_path}`;
  const genres = movie?.genres.map(genre => genre.name).join(' ');
  const userScore = Math.round(movie?.vote_average * 10);
  const releaseYear =
    new Date(Date.parse(movie?.release_date)).getFullYear() || '';

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      <GoBackLink to={backLink.current}>
        {' '}
        <AiOutlineArrowLeft />
        <span>Go back</span>
      </GoBackLink>
      {movie && (
        <Wrapper>
          <Poster src={posterPath} alt={movie.title} height="200" />
          <InfoThumb>
            <FilmTitle>
              {movie.title} ({releaseYear})
            </FilmTitle>
            <Text>User Score: {userScore}%</Text>
            <TextTitle>Overview</TextTitle>
            <Text>{movie.overview}</Text>
            <TextTitle>Genges</TextTitle>
            <Text>{genres}</Text>
          </InfoThumb>
        </Wrapper>
      )}
      <InfoTitle>Additional information</InfoTitle>
      <InfoList>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </InfoList>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;
