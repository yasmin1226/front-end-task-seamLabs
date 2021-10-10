import { SIZE, TYPE, COLOR, COLLECTION } from "./types";
export const handleSize = (e, filterdSize) => async (dispatch) => {
  let copyArr = [...filterdSize];

  if (e.target.checked) {
    copyArr.push(e.target.value);
  } else {
    copyArr = copyArr.filter((el) => el !== e.target.value);
  }
  dispatch({
    type: SIZE,
    payload: copyArr,
  });
};

export const handleType = (e, types) => async (dispatch) => {
  let copyArr = [...types];

  if (e.target.checked) {
    copyArr.push(e.target.value);
  } else {
    copyArr = copyArr.filter((el) => el !== e.target.value);
  }
  dispatch({
    type: TYPE,
    payload: copyArr,
  });
};
export const handleColor = (e, colors) => async (dispatch) => {
  let copyArr = [...colors];

  if (e.target.checked) {
    copyArr.push(e.target.value);
  } else {
    copyArr = copyArr.filter((el) => el !== e.target.value);
  }
  dispatch({
    type: COLOR,
    payload: copyArr,
  });
};
export const handleCollection = (e, collections) => async (dispatch) => {
  let copyArr = [...collections];
  if (e.target.checked) {
    copyArr.push(e.target.value);
  } else {
    copyArr = copyArr.filter((el) => el !== e.target.value);
  }
  dispatch({
    type: COLLECTION,
    payload: copyArr,
  });
};
