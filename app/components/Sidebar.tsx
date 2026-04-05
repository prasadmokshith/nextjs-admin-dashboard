"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();

  // ✅ Lazy initialization (runs only on client)
  const [role] = useState<"admin" | "user">(() => {
    if (typeof document !== "undefined") {
      return document.cookie.includes("role=admin") ? "admin" : "user";
    }
    return "user";
  });

  return (
    <Drawer variant="permanent" anchor="left">
      <List sx={{ width: 240 }}>
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/dashboard")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {/* Admin Only */}
        {role === "admin" && (
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/dashboard/users")}>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Drawer>
  );
}
