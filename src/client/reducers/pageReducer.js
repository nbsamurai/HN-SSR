import { FETCH_PAGE } from '../actions';

export default (state = { hits: [] }, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return action.payload.data;
    default:
      return state;
  }
};
