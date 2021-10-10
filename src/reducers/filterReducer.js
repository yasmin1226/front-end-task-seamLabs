import {
  FILTER_ERROR,
  CATOGRIE,
  COLLECTION,
  SIZE,
  TYPE,
  COLOR,
} from "../actions/types";
const initialState = {
  sizes: [],
  types: [],
  catogries: [],
  collections: [],
  colors: [],
};
const Filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATOGRIE:
      return {
        ...state,
        catogries: payload,
      };

    case COLLECTION:
      return {
        ...state,
        collections: payload,
      };
    case SIZE:
      return {
        ...state,
        sizes: payload,
      };
    case TYPE:
      return {
        ...state,
        types: payload,
      };
    case COLOR:
      return {
        ...state,
        colors: payload,
      };
    case COLLECTION:
      return {
        ...state,
        collections: payload,
      };
    case FILTER_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default Filter;
