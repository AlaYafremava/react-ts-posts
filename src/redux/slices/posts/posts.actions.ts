import { reducers } from "./posts.slice";
import api from "../../../api";
import { AppDispatch } from "../../store";

const { setPostList, setPost, setGetPostsIsProcessing } = reducers;

export const getPostById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const data = await api.posts.getPostById(id);
    dispatch(setPost(data));
  } catch (error) {
    console.error("Error fetching post by ID:", error);
  }
};

export const getPosts =
  (query: string = "") =>
  async (dispatch: AppDispatch) => {
    dispatch(setGetPostsIsProcessing(true));
    try {
      const data = await api.posts.getPosts(query || null);
      dispatch(setPostList(data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      dispatch(setGetPostsIsProcessing(false));
    }
  };
