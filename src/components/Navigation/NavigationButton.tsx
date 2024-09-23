import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { SxStyles } from "../../utils/types";

export interface NavigationButton {
  text: string | undefined;
  path: "posts" | "users";
  active?: boolean;
  onClick: () => void;
}

export const NavigationButton = ({
  text,
  onClick,
  active,
}: NavigationButton) => {
  const sxStyles: SxStyles = {
    button: {
      height: "48px",
      padding: "8px 16px",
      backgroundColor: () => (active ? "rgba(0, 0, 0, 0.04)" : undefined),
    },
    text: {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "16px",
    },
  };

  return (
    <ListItem disablePadding>
      <ListItemButton sx={sxStyles.button} onClick={onClick}>
        {text ? (
          <ListItemText>
            <Typography sx={sxStyles.text}>{text}</Typography>
          </ListItemText>
        ) : null}
      </ListItemButton>
    </ListItem>
  );
};
