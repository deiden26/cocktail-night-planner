import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Title() {
  return (
    <>
      <Typography variant="h3" component="h1">Cocktail Night Planner</Typography>
      <Typography variant="subtitle1">
        Create shopping lists for your bar
      </Typography>
      <Divider sx={{ mt: 1, mb: 2 }}/>
    </>
  );
}
