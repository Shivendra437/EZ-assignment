import React from "react";
import { useState } from "react";
import { Stack, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export default function Entities() {
  const [code, setCode] = useState("Invoice Code");
  const [user, setUser] = useState("users");

  const abc = {
    padding: "10px",
    color: "grey",
    display: "flex",
    position: "relative",
    marginLeft: "179px",
    width: "1000px",
    height: "40px"
  };
  return (
    <>
      <Box style={abc}>
        <Button size="small" variant="contained">
          Entities
        </Button>
        <Button size="small" onMouseOver={() => setCode("Details")}>
          {code}
        </Button>
        <Button size="small" onMouseOver={() => setUser("Details")}>
          {user}
        </Button>
      </Box>
      <div style={abc}> 4 entities</div>
    </>
  );
}
