import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPosts } from "../../redux/slices";
import PostCard from "./Post.card";
import { Grid, Pagination } from "@mui/material";
import { paginateByQty } from "../../utils/utils";
import { Post } from "../../api/types";

const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.list);
  const postsByQty = paginateByQty(8, posts);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      await dispatch(getPosts());
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      margin="10px"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Grid item>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {postsByQty[page - 1]?.map((post) => (
            <Grid item key={post.id}>
              <PostCard post={post as Post} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <Pagination
          count={postsByQty?.length}
          onChange={(_, page: number) => setPage(page)}
          color="secondary"
        />
      </Grid>
    </Grid>
  );
};

export default PostsPage;
