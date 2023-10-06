import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./Helper";

export const projectAPI = async (data, header) => {
  return await commonrequest("GET", `${BASE_URL}/projects`, data, header);
};
