import { GiFilmProjector } from 'react-icons/gi';

import { Item, List, StyledLink } from './MoviesList.styled';

function MoviesList({ movies, location }) {
  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <GiFilmProjector size={12} /> {movie.title}
            </StyledLink>
          </Item>
        );
      })}
    </List>
  );
}

export default MoviesList;
