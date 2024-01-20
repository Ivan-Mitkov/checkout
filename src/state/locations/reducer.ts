import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCountriesRequest, getCitiesRequest } from "../../api/geoService";

interface City {
  id: string;
  name: string;
}

interface Country {
  id: string;
  name: string;
}
interface LocationState {
  cities: City[];
  countries: Country[];
}
const locationSlice = createSlice({
  name: "products",
  initialState: {
    cities: [],
    countries: [],
  } as LocationState,
  reducers: {
    setCities(state, action: PayloadAction<City[]>) {
      state.cities = action.payload;
    },
    setCountries(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
  },
});

export const { setCities, setCountries } = locationSlice.actions;

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
