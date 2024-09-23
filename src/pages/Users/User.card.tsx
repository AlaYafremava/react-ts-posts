import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { User } from "../../api/types";
import { Avatar, CardHeader } from "@mui/material";
import { stringAvatar } from "../../utils/utils";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar {...stringAvatar(user?.name)} />
        }
        title={user?.name}
        subheader={user?.address.city}
      />
      <CardContent>
      
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            WebkitLineClamp: "1",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {user?.company.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            WebkitLineClamp: "2",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {user?.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
