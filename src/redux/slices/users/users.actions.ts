import { reducers } from "./users.slice";
import api from "../../../api";
import { AppDispatch } from "../../store";

const { setUsersList, setUser } = reducers;

export const getUserById = (id: string) => async (dispatch: AppDispatch) => {
  return api.users.getUserById(id).then((data) => dispatch(setUser(data)));
};

export const getUsers = () => async (dispatch: AppDispatch) => {
  return api.users.getUsers().then((data) => dispatch(setUsersList(data)));
};
