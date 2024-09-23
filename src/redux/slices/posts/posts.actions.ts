import { reducers } from "./posts.slice";
import api from "../../../api";
import { AppDispatch } from "../../store";

const { setPostList, setPost } = reducers;

export const getPostById = (id: string) => async (dispatch: AppDispatch) => {
  return api.posts.getPostById(id).then((data) => dispatch(setPost(data)));
};

export const getPosts = () => async (dispatch: AppDispatch) => {
  return api.posts.getPosts().then((data) => dispatch(setPostList(data)));
};
