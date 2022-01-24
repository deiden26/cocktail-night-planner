import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useCocktails } from '../stores/cocktailStore';

export default function CocktailCard({
  name,
  id,
}) {
  const removeCocktail = useCocktails(state => state.removeCocktail);

  return (
    <Card varient="outlined" elevation={2}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" sx={{ color: 'text.primary' }}>
            {name}
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