import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { paginateByQty } from "../../utils/utils";
import { getUsers } from "../../redux/slices";
import { CircularProgress, Grid, Pagination, Typography } from "@mui/material";
import UserCard from "./User.card";
import { User } from "../../api/types";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);
  const isLoading = useAppSelector((state) => state.users.getUsersIsProcessing);

  const [page, setPage] = useState(1);

  const usersByQty = useMemo(() => paginateByQty(10, users), [users]);

  useEffect(() => {
    // Получение пользователей при монтировании компонента
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    // Сбрасываем страницу на первую при изменении списка пользователей
    setPage(1);
  }, [users]);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      margin="10px"
      sx={{ display: "flex", alignItems: "center" }}
    >
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
      ) : usersByQty?.length ? (
        <>
          <Grid item>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {usersByQty[page - 1]?.map((user) => (
                <Grid item key={user.id}>
                  <UserCard user={user as User} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item sx={{ position: "absolute", bottom: "30px" }}>
            <Pagination
              count={usersByQty.length}
              page={page}
              onChange={(_, newPage: number) => setPage(newPage)}
              color="secondary"
            />
          </Grid>
        </>
      ) : (
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          No users found.
        </Typography>
      )}
    </Grid>
  );
};

export default UsersPage;
