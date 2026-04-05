"use client";

import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { userSchema } from "@/validations/userSchema";

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

type AddUserFormProps = {
  onAdd: (user: User) => void;
};

export default function AddUserForm({ onAdd }: AddUserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const result = userSchema.safeParse({ name, email });

    if (!result.success) {
      const message = result.error?.issues?.[0]?.message || "Invalid input";
      setError(message);
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      phone: "N/A",
      website: "N/A",
      company: { name: "New Company" },
      address: {
        street: "N/A",
        city: "N/A",
      },
    };

    onAdd(newUser);

    setName("");
    setEmail("");
    setError("");
  };

  return (
    <Box mb={2}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mr: 1 }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mr: 1 }}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Add User
      </Button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </Box>
  );
}
