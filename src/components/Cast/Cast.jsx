import { useEffect, useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/themoviedbAPI';
import { Item, List, Photo, Text } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {credits && credits.length > 0 ? (
        <List>
          {credits.map(({ id, original_name, character, profile_path }) => {
            return (
              <Item key={id}>
                <Photo
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={original_name}
                  height="100"
                />
                <div>
                  <Text>
                    <RxDotFilled />
                    {original_name}
                  </Text>
                  <Text>Character: {character}</Text>
                </div>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We don't have any information about casts for this movie.</p>
      )}
    </>
  );
}

export default Cast;
