import apiClient from "./apiClient";

export const getCountriesRequest = () => {
  let url = "/countries";

  return apiClient.get(url);
};

export const getCitiesRequest = () => {
  let url = "/cities";

  return apiClient.get(url);
};
