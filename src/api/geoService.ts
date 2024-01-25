import apiClient from "./apiClient";
import { City, Country } from "../types";

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
