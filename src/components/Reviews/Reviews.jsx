import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RxDotFilled } from 'react-icons/rx';
import { getMovieReviews } from 'utils/themoviedbAPI';
import { Item, List, Text } from './Reviews.styled';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <List>
          {reviews.map(({ author, content, id }) => {
            return (
              <Item key={id}>
                <Text>
                  <RxDotFilled />
                  Author: {author}
                </Text>
                <Text>{content}</Text>
              </Item>
            );
          })}
        </List>
      ) : (
        <Text>We don't have any reviews for this movie.</Text>
      )}
    </>
  );
}

export default Reviews;
