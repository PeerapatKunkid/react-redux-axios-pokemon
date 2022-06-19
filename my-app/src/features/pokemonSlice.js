import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const pokemonSlide = createSlice({
  name: "pokemon",
  initialState: {
    data: null,
    data2:null
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    getPokemon: (state, action) => {
      state.data = [action.payload];
    },
    getPokemonName: (state, action) => {
      state.data2 = [action.payload];
    }
  }
});

export const getPokemonAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getPokemon(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getPokemonNameAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    dispatch(getPokemonName(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addTodoAsync = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, data);
    console.log(response);
    dispatch(addTodo(response.data));
  } catch (err) {
    throw new Error(err);
  }
};



export const { addTodo, getPokemon,getPokemonName} = pokemonSlide.actions;
export const showPokemon = (state) => state.pokemon.data;
export const showPokemonName = (state) => state.pokemon.data2;
export default pokemonSlide.reducer;
