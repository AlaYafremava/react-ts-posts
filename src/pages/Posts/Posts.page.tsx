import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPosts } from "../../redux/slices";
import PostCard from "./Post.card";
import {
  CircularProgress,
  Grid,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { paginateByQty } from "../../utils/utils";
import { Post } from "../../api/types";

const PostsPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.list);
  const isLoading = useAppSelector(
    (state) => state.posts.getPostsIsProcessing
  );

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string>("");

  const postsByQty = useMemo(() => paginateByQty(8, posts as Post[]), [posts]);

  const debouncedFetchPosts = useCallback(
    debounce((query: string) => dispatch(getPosts(query)), 500),
    [dispatch]
  );

  useEffect(() => {
    debouncedFetchPosts(query);

    // Очистка debounced функции при размонтировании
    return () => {
      debouncedFetchPosts.cancel();
    };
  }, [debouncedFetchPosts, query]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setPage(1); // Обнуление страницы при новом поиске
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      margin="10px"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Grid item width={"300px"}>
        <TextField
          label="Search Posts"
          value={query}
          onChange={handleQueryChange}
          fullWidth
        />
      </Grid>

      {isLoading ? (
        <Grid
          container
          margin="10px"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Grid>
      ) : (
        <>
          {postsByQty[page - 1]?.length ? (
            <>
              <Grid item>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  {postsByQty[page - 1].map((post) => (
                    <Grid item key={post.id}>
                      <PostCard post={post as Post} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item sx={{ position: "absolute", bottom: "30px" }}>
                <Pagination
                  count={postsByQty.length}
                  page={page}
                  onChange={(_, page: number) => setPage(page)}
                  color="secondary"
                />
              </Grid>
            </>
          ) : (
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              No posts found.
            </Typography>
          )}
        </>
      )}
    </Grid>
  );
};

export default PostsPage;
