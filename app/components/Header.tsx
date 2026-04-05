"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ColorModeContext } from "../providers";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  const { toggleTheme, mode } = useContext(ColorModeContext);
  const router = useRouter();
  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0";
    document.cookie = "role=; Max-Age=0";
    router.push("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
        width: `calc(100% - 240px)`,
        ml: "240px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
