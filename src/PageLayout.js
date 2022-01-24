import shallow from 'zustand/shallow';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Title from './Title';
import Cocktails from './Cocktails';
import IngredientList from './IngredientList';
import { useSnackbar } from './snackbarStore';

export default function PageLayout() {
  const [
    snackbarTitle,
    snackbarMessage,
    snackbarDuration,
    snackbarSeverity,
    snackbarKey,
    resetSnackbar,
  ] = useSnackbar(state => [
    state.title,
    state.message,
    state.duration,
    state.severity,
    state.key,
    state.reset,
  ], shallow);

  return (
    <>
      <Box height="100vh" display="flex" flexDirection="column" p={2}>
        <Box>
          <Title/>
        </Box>
        <Box flex={1} overflow="auto" pt={1}>
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
      <Snackbar
        open={Boolean(snackbarMessage || snackbarTitle)}
        onClose={resetSnackbar}
        autoHideDuration={snackbarDuration}
        key={snackbarKey}
      >
        <Alert
          onClose={resetSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarTitle &&
            <AlertTitle>
              {snackbarTitle}
            </AlertTitle>
          }
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
