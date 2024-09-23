import { Box, List } from "@mui/material";
import { NavigationButton } from "./NavigationButton";

interface NavigationProps {
  navigationButtons: NavigationButton[];
  width: number;
}

export const Navigation = ({ navigationButtons, width }: NavigationProps) => {
  return (
    <Box sx={{ width }}>
      <List>
        {navigationButtons.map((button) => (
          <NavigationButton key={button.text} {...button} />
        ))}
      </List>
    </Box>
  );
};
