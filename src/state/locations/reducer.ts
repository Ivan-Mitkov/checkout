import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { City, Country } from "../../types";
import { getCountriesRequest, getCitiesRequest } from "../../api/geoService";

interface LocationState {
  cities: City[];
  countries: Country[];
  selectedCountry?: Country | null;
}

const locationSlice = createSlice({
  name: "location",
  initialState: {
    cities: [],
    countries: [],
    selectedCountry: { id: "", name: "", vat: 0 },
  } as LocationState,
  reducers: {
    setCities(state, action: PayloadAction<City[]>) {
      state.cities = action.payload;

      const countriesLenght = state.countries.length;
      if (countriesLenght) {
        const citiesWithCountry = state.cities.map((city, index) => ({
          ...city,
          country: state.countries[index % countriesLenght],
        }));
        state.cities = citiesWithCountry;
      }
    },
    setSelectedCountry(state, action: PayloadAction<Country>) {
      state.selectedCountry = action.payload;
    },
    setCountries(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
  },
});

export const { setCities, setCountries, setSelectedCountry } =
  locationSlice.actions;

export const doGetCitiesRequest = () => async (dispatch: Dispatch) => {
  try {
    const response = await getCitiesRequest();

    if (!response?.data) return;

    const { cities } = response.data;
    dispatch(setCities(cities));

    return cities;
  } catch (error) {
    throw error;
  }
};
export const doGetCountriesRequest = () => async (dispatch: Dispatch) => {
  try {
    const response = await getCountriesRequest();

    if (!response?.data) return;

    const { countries } = response.data;

    dispatch(setCountries(countries));

    return countries;
  } catch (error) {
    throw error;
  }
};

export default locationSlice.reducer;
