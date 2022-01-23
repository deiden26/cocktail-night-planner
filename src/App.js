 import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import PageLayout from './PageLayout';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <PageLayout/>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
