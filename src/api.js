import axios from 'axios';
import {
  useQuery,
  useQueries,
} from 'react-query';

export function useSearchCocktails(searchString) {
  return useQuery(
    ['cocktail-search', searchString],
    async () => {
      if (searchString.length < 3) {
        return [];
      }

      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        { params: { s: searchString } }
      );

      return (response.data.drinks || []).map(drink => parseDrink(drink));
    }
  );
}

export function useGetCocktail(id) {
  return useQuery(
    ['get-cocktail', id],
    async () => {
      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
        { params: { i: id } }
      );
      const drink = response.data.drinks[0];

      return parseDrink(drink);
    }
  );
}

export function useGetCocktails(ids) {
  return useQueries(
    ids.map(id => ({
      queryKey: ['get-cocktail', id],
      queryFn: async () => {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
          { params: { i: id } }
        );
        const drink = response.data.drinks[0];

        return parseDrink(drink);
      }
    }))
  );
}


function parseDrink(drink) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    ingredients: ingredients,
  };
}
