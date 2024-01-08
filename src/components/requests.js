import { $api } from "./requester";

const ENDPOINTS = {
  TITLE: "/todos",
};

export const fetchToDos = () => {
  const response = $api.get(ENDPOINTS.TITLE);
  return response;
};
export const fetchToDosById = (id) => {
  const response = $api.get(`${ENDPOINTS.TITLE}/${id}`);
  return response;
};

export const fetchToDosByParams = (params) => {
  const response = $api.get(ENDPOINTS.TITLE, { params });

  return response;
};
