import { configureStore } from "@reduxjs/toolkit";
import pokemonSlide from "./features/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlide
  }
});

