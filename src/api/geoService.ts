import apiClient from "./apiClient";

export type City = {
  id: string;
  name: string;
  country: string;
};
export type Country = {
  id: string;
  name: string;
};

type CountryResponse = {
  country: Country[];
};

type CityResponse = {
  city: City[];
};
export const getCountriesRequest = () => {
  let url = "/countries";

  return apiClient.get(url);
};

export const getCitiesRequest = () => {
  let url = "/cities";

  return apiClient.get(url);
};
