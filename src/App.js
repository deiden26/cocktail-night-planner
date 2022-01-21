import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';

import Title from './Title';
import Cocktails from './Cocktails';
import IngredientList from './IngredientList';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <Title/>
        </Grid>
        <Grid item xs={6}>
          <Cocktails/>
        </Grid>
        <Grid item xs={6}>
          <IngredientList/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
