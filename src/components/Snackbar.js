import shallow from 'zustand/shallow';

import MuiSnackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { useSnackbar } from '../stores/snackbarStore';

export default function Snackbar() {
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
    <MuiSnackbar
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
    </MuiSnackbar>
  );
}
