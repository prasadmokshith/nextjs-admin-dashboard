"use client";

import { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Box,
  Typography,
  TextField,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { useUsers } from "../hooks/useUsers";
import { useDebounce } from "../hooks/useDebounce";
import AddUserForm from "../components/AddUserForm";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    city: string;
  };
};

export default function UserTable() {
  const { data: users = [], isLoading, error } = useUsers();

  // ✅ store only newly added users
  const [addedUsers, setAddedUsers] = useState<User[]>([]);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const rowsPerPage = 5;
  const debouncedSearch = useDebounce(search, 500);

  // ✅ merge API + added users
  const allUsers = [...addedUsers, ...users];

  // ✅ filter on merged data
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // ✅ pagination
  const paginatedUsers = filteredUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // ✅ add user handler
  const handleAddUser = (newUser: User) => {
    setAddedUsers((prev) => [newUser, ...prev]);
    setPage(0);
  };

  // ✅ loading state
  if (isLoading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  // ✅ error state
  if (error instanceof Error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  // ✅ empty state
  if (!isLoading && allUsers.length === 0) {
    return <Typography>No users found</Typography>;
  }

  return (
    <div>
      {/* 🔍 Search */}
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(0);
        }}
      />

      {/* ➕ Add User */}
      <AddUserForm onAdd={handleAddUser} />

      {/* 📊 Table */}
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Company</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow
              key={user.id}
              hover
              sx={{
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              onClick={() => {
                setSelectedUser(user);
                setOpen(true);
              }}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 📄 Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>User Details</DialogTitle>

        <DialogContent>
          {selectedUser && (
            <>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Website:</strong> {selectedUser.website}
              </p>
              <p>
                <strong>Address:</strong> {selectedUser.address?.street},{" "}
                {selectedUser.address?.city}
              </p>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* 📄 Pagination */}
      <TablePagination
        component="div"
        count={filteredUsers.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
