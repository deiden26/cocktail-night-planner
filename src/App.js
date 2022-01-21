import Grid from '@mui/material/Grid';

import Title from './Title';
import Cocktails from './Cocktails';
import IngredientList from './IngredientList';

function App() {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Title/>
      </Grid>
      <Grid item xs={8}>
        <Cocktails/>
      </Grid>
      <Grid item xs={2}>
        <IngredientList/>
      </Grid>
    </Grid>
  );
}

export default App;
