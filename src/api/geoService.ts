import apiClient from "./apiClient";
import { City, Country } from "../types";

interface CountryResponse {
  data: {
    countries: Country[];
  };
}

interface CityResponse {
  data: {
    cities: City[];
  };
}
export const getCountriesRequest = (): Promise<CountryResponse> => {
  let url = "/countries";

  return apiClient.get<CountryResponse, any>(url);
};

export const getCitiesRequest = (): Promise<CityResponse> => {
  let url = "/cities";

  return apiClient.get<CityResponse, any>(url);
};
