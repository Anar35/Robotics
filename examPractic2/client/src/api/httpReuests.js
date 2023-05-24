import axios from "axios";
import { BASE_URL } from "./baseURL";

//get all
export const getAllRobots = async (name) => {
  let globalData;
  let URL;
  if (name) {
    URL = BASE_URL + `/robots?name=${name}`;
  } else {
    URL = BASE_URL + "/robots";
  }
  await axios.get(URL).then((res) => {
    globalData = res.data;
  });
  return globalData;
};

//get bt ID
export const getRobotByID = async (id) => {
  let globalData;
  await axios.get(`${BASE_URL}/robots/${id}`).then((res) => {
    globalData = res.data;
  });
  return globalData;
};

//delete
export const deleteRobotByID = (id) => {
  axios.delete(`${BASE_URL}/robots/${id}`);
};

//edit
export const editRobotByID = (id, payload) => {
  axios.put(`${BASE_URL}/robots/${id}`, payload);
};

//post
export const addRobot = (payload) => {
  axios.post(`${BASE_URL}/robots`, payload);
};
