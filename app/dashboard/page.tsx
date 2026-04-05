"use client";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserChart from "../components/UserChart";
import { Box, Typography, Toolbar, Paper } from "@mui/material";
import { useUsers } from "../hooks/useUsers";

export default function DashboardPage() {
  const { data: users = [] } = useUsers();
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, ml: "240px" }}>
        <Header />
        <Toolbar /> {/* spacing for fixed header */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h4">Welcome to Dashboard</Typography>
          <Paper sx={{ p: 2 }}>
            <UserChart users={users} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
