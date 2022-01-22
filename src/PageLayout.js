import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Title from './Title';
import Cocktails from './Cocktails';
import IngredientList from './IngredientList';

export default function PageLayout() {
  return (
      <Box height="100vh" display="flex" flexDirection="column" p={2}>
        <Box>
          <Title/>
        </Box>
        <Box flex={1} overflow="auto">
          <Grid container spacing={2} height="100%">
            <Grid item sm={6} xs={12}>
              <Cocktails/>
            </Grid>
            <Grid item sm={6} xs={12}>
              <IngredientList/>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}
