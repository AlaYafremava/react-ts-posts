import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPostById } from "../../redux/slices";
import { getUserById } from "../../redux/slices/users/users.actions";

export default function PostPage() {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.posts.post);
  const user = useAppSelector((state) => state.users.user);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      await dispatch(getPostById(id as string));
    };

    fetchPost();
  }, [dispatch, id]);

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(getUserById(post?.userId as string));
    };

    fetchUser();
  }, [dispatch, post]);

  return (
    <Card sx={{ margin: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="avatar"></Avatar>
        }
        title={user?.name}
        subheader={user?.address.city}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post?.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {post?.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
