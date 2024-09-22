import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Box, CircularProgress, CssBaseline, SxProps } from '@mui/material';
import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store.ts';

const boxSx: SxProps = {
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "28px",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* INFO: ResetCSS от mui */}
    <CssBaseline />

    <Provider store={store}>
      <Suspense
        fallback={
          <Box sx={boxSx}>
            <CircularProgress />
          </Box>
        }
      >

        // TODO: router
        {/* <RouterProvider router={router} /> */}
      </Suspense>
    </Provider>
  </StrictMode>
);
