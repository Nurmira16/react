import { $api } from "./requester";
const ENDPONTS = {
  TITLE: "/todos",
};
export const fetchToDos = () => {
  const response = $api.get(ENDPONTS.TITLE);
  return response;
};
// export const fetchToDosById = (id) => {
//   // const response = $api.get(`${ENDPONTS.TITLE}/${id}`);
//   return response;
// };
export const fetchToDosByParams = (params) => {
  const response = $api.get(ENDPONTS.TITLE, { params });
  return response;
};
