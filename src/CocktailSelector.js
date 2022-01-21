import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function CocktailSelector() {
  return (
    <Autocomplete
      options={['High Ball', 'Martini']}
      autoHighlight={true}
      renderInput={(params) => <TextField {...params} label="Enter a Cocktail" />}
    />
  );
}
