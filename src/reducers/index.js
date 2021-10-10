import { combineReducers } from "redux";
import product from "./productReducer";
import filter from "./filterReducer";
const rootReducers = combineReducers({
  products: product,
  filter: filter,
});
export default rootReducers;
