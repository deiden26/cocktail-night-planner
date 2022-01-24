import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useCocktails = create(persist(
  (set, get) => ({
    cocktails: [],
    addCocktail: cocktail => set(
      state => ({cocktails: [...state.cocktails, cocktail]})
    ),
    removeCocktail: id => set(
      state => ({
        cocktails: state.cocktails.filter(cocktail => (
          cocktail.id !== id
        ))
      })
    ),
    hasCocktail: id => (
      get().cocktails.findIndex(cocktail => cocktail.id === id) > -1
    ),
  })),
  { name: 'cocktails' }
);
