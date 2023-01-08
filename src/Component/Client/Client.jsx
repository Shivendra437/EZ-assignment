import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
let arr = [
  { name: "Company name", ccde: "CCDE", en: "8 Entities", user: "64 user" },
  {
    name: "company name",
    ccde: "CCDE",
    en: "8 Entities",
    user: "64 user"
  }
];
export default function Client() {
  return (
    <div
      style={{
        display: "flex",
        direction: "column",
        width: "100px",
        height: "100%"
      }}
    >
      <Stack dirction="column" spacing={1}>
        {arr.map((el) => (
          <Item
            sx={{
              width: "250px",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "grey",
                cursor: "pointer"
              }
            }}
          >
            <Box
              style={{
                display: "flex",
                direction: "cloumn",
                justifyContent: "space-between"
              }}
            >
              <span>CompanyName</span>
              <span>CCDE</span>
            </Box>
            <Box
              style={{
                fontSize: "12px",
                display: "flex",
                direction: "column",
                justifyContent: "space-between"
              }}
            >
              <span>8 Entities</span> <span>64 users</span>
            </Box>
          </Item>
        ))}
      </Stack>
    </div>
  );
}
