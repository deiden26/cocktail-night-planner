import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useGetCocktail } from '../api';
import { useCocktails } from '../stores/cocktailStore';

export default function CocktailCard({ id }) {
  const { data: cocktail, isLoading } = useGetCocktail(id);
  const removeCocktail = useCocktails(state => state.removeCocktail);

  if (isLoading) {
    return null;
  }

  return (
    <Card varient="outlined" elevation={2}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" sx={{ color: 'text.primary' }}>
            {cocktail.name}
          </Typography>
          <IconButton
            onClick={() => removeCocktail(id)}
            aria-label="Remove"
            color="error"
          >
            <RemoveCircleOutlineIcon/>
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
