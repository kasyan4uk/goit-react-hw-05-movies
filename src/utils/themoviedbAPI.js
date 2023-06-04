import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '771e9e546d4a20d6aadc5378684f07f4',
};

export const getPopularMovies = async (page = 1) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
};

export const getMoviesByQuery = async (query, page = 1) => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: {
        query,
        page,
      },
    });
    return data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
};

export const getMovieById = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
};

export const getMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
};

export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
};
