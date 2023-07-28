import { STORE_DATA_LOADING, STORE_DATA_SUCCESS } from './actions';

const initialState = {
  data: {},
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_DATA_LOADING:
      return { ...state, loading: true };
    case STORE_DATA_SUCCESS:
      return { ...initialState, data: action.payload };
    default:
      return initialState;
  }
}
