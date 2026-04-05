"use client";

import Sidebar from "../..//components/Sidebar";
import Header from "../..//components/Header";
import UserTable from "../../components/UserTable";
import { Box, Typography, Toolbar } from "@mui/material";
import { Paper } from "@mui/material";

export default function UsersPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, ml: "240px" }}>
        <Header />
        <Toolbar />

        <Box sx={{ p: 3 }}>
          <Typography variant="h4" mb={2}>
            Users
          </Typography>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
            <UserTable />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
