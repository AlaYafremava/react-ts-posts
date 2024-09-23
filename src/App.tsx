import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { useEffect, useMemo } from "react";
import { Box, Grid } from "@mui/material";
import { EPages } from "./router";
import { NavigationButton } from "./components/Navigation/NavigationButton";

const NAV_WIDTH = 250;

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === EPages.Home) navigate(EPages.Posts);
  }, [location.pathname, navigate]);

  const navigationButtons = useMemo<NavigationButton[]>(
    () => [
      {
        text: "Posts",
        path: EPages.Posts,
        active: location.pathname.includes(EPages.Posts),
        onClick: () => navigate(EPages.Posts),
      },
      {
        text: "Users",
        path: EPages.Users,
        active: location.pathname.includes(EPages.Users),
        onClick: () => navigate(EPages.Users),
      },
    ],
    [location.pathname, navigate]
  );

  return (
    <Grid container>
      <Navigation navigationButtons={navigationButtons} width={NAV_WIDTH} />
      <Box width={`calc(100% - ${NAV_WIDTH}px)`} sx={{display: 'flex', alignItems: 'center'}}>
        <Outlet />
      </Box>
    </Grid>
  );
}

export default App;
