import axios from "axios";
import { url } from "../constants/serve";

export const userLogin = userData => {
  return axios.post(url + "/home", userData);
};

export const userRegister = userData => {
  return axios.post(url + "/home", userData);
};
