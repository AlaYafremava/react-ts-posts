// import { AxiosError } from "axios";
import { reducers } from "./posts.slice";
import api from "../../../api";
import { AppDispatch } from "../../store";

const { setPostList } = reducers;

export const getPost = (id: string) => async () => {

  // TODO: check and finish
  return api.posts.getPostById(id).then((data) => console.log("---0-0-", data));
};

export const getPosts = () => async (dispatch: AppDispatch) => {
  return api.posts.getPosts().then((data) => {
    dispatch(setPostList(data));
  });
};

