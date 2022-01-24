import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';

export default function NoIngredientsAlert() {
  return (
    <Alert
      variant="outlined"
      severity="info"
      icon={<NoDrinksIcon fontSize="inherit"/>}
    >
      <AlertTitle>
        No Ingredients to List
      </AlertTitle>
      Add drinks to your cocktail list to see what ingredients you will need
    </Alert>
  );

}
