import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Post } from "../../api/types";
import { CardActionArea } from "@mui/material";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea href={`posts/${post?.id}`}>
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
            {post?.title}
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
            {post?.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
