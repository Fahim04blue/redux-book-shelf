import axios from "axios";
import {
  ADD_TO_FINISHED_LIST,
  ADD_TO_READING_LIST,
  LOAD_BOOKS,
  LOAD_FROM_READING_LIST,
  REMOVE_FROM_READING_LIST,
} from "./actionTypes";

export const loadBooks = () => {
  return (dispatch, getState) => {
    // console.log("getState from loadbooks", getState());
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: LOAD_BOOKS,
          payload: data.data,
        });
        console.log(data);
      });
  };
};

export const addToReadingList = (payload) => {
  return async (dispatch) => {
    await axios.post("http://localhost:8080/add-to-reading-list/", payload);
    dispatch({
      type: ADD_TO_READING_LIST,
      payload,
    });
  };
};

export const loadFromReadingList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:8080/reading-list/");
    dispatch({
      type: LOAD_FROM_READING_LIST,
      payload: res.data.data,
    });
    console.log(res.data.data);
  };
};

export const addToFinishedList = (payload) => {
  return {
    type: ADD_TO_FINISHED_LIST,
    payload,
  };
};

export const removeFromReadingList = (payload) => {
  return async (dispatch) => {
    await axios.delete(
      `http://localhost:8080/remove-from-reading-list/${payload.id}`,
      payload
    );
    dispatch({
      type: REMOVE_FROM_READING_LIST,
      payload,
    });
  };
  // return {
  //   type: REMOVE_FROM_READING_LIST,
  //   payload,
  // };
};
