import create from 'zustand';

export const useStore = create(set => ({
  cocktails: [],
  ingredients: [],
  addCocktail: cocktail => set(
    state => ({cocktails: [...state.cocktails, cocktail]})
  ),
  removeCocktail: id => set(
    state => ({
      cocktails: state.cocktails.filter(listCocktail => (
        listCocktail.id !== id
      ))
    })
  ),
}));
