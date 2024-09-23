import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { paginateByQty } from "../../utils/utils";
import { getUsers } from "../../redux/slices";
import { Grid, Pagination } from "@mui/material";
import UserCard from "./User.card";
import { User } from "../../api/types";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.list);
  const usersByQty = paginateByQty(5, users);

  const [page, setPage] = useState(1);
         
  useEffect(() => {
    const fetchUsers = async () => {
      await dispatch(getUsers());
    };

    fetchUsers();
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
          {usersByQty[page - 1]?.map((user) => (
            <Grid item key={user.id}>
              <UserCard user={user as User} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item>
        <Pagination
          count={usersByQty?.length}
          onChange={(_, page: number) => setPage(page)}
          color="secondary"
        />
      </Grid>
    </Grid>
  );
};

export default UsersPage;
