import { reducers } from "./users.slice";
import api from "../../../api";
import { AppDispatch } from "../../store";

const { setUsersList, setUser, setGetUsersIsProcessing } = reducers;

export const getUserById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setGetUsersIsProcessing(true));
  try {
    const data = await api.users.getUserById(id);
    dispatch(setUser(data));
  } catch (error) {
    console.error("Error fetching user by ID:", error);
  } finally {
    dispatch(setGetUsersIsProcessing(false));
  }
};

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const data = await api.users.getUsers();
    dispatch(setUsersList(data));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
