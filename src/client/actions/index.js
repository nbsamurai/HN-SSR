import axios from 'axios';

export const FETCH_PAGE = 'fetch_page';
export const fetchPage = (page) => async (dispatch) => {
  const res = await axios.get(
    `https://hn.algolia.com/api/v1/search?page=${page}`
  );

  dispatch({
    type: FETCH_PAGE,
    payload: res,
  });
};
