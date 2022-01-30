import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useCocktails = create(persist(
  (set, get) => ({
    cocktailIds: [],
    addCocktail: id => set(
      state => ({cocktailIds: [...state.cocktailIds, id]})
    ),
    removeCocktail: id => set(
      state => ({
        cocktailIds: state.cocktailIds.filter(cocktailId => (
          cocktailId !== id
        ))
      })
    ),
    hasCocktail: id => (
      get().cocktailIds.findIndex(cocktailId => cocktailId === id) > -1
    ),
  })),
  { name: 'cocktails' }
);
