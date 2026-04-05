"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email) {
      const role = email === "admin@gmail.com" ? "admin" : "user";

      document.cookie = `token=dummy-token; path=/`;
      document.cookie = `role=${role}; path=/`;

      router.push("/dashboard");
    }
  };

  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Paper sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}
