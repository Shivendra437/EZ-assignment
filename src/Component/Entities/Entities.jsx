import React from "react";
import { useState } from "react";
import { Stack, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export default function Entities() {
  const [code, setCode] = useState("Invoice Code");
  const [user, setUser] = useState("users");
  return (
    <>
      <Stack direction="row">
        <Button size="small" variant="contained">
          Entities
        </Button>
        <Button size="small" onMouseOver={() => setCode("Details")}>
          {code}
        </Button>
        <Button size="small" onMouseOver={() => setUser("Details")}>
          {user}
        </Button>
      </Stack>
      <br />
      <Box
        style={{ border: "2px solid black", width: "800px", height: "600px" }}
      >
        <Box
          style={{
            padding: "4px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <span style={{ color: "grey" }}> 4 Entites</span>
          <span style={{ backgroundColor: "blue", color: "white" }}>
            {" "}
            <AddIcon />
          </span>
        </Box>
        <Box
          style={{
            margin: "40px",
            border: "2px solid red",
            width: "600px",
            height: "600px"
          }}
        ></Box>
      </Box>
    </>
  );
}
