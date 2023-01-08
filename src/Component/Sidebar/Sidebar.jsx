import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Ezworks from "./Ezworks.jpeg";
// import Client from "../Client/Client";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function ResponsiveStack() {
  return (
    <>
      <div
        style={{
          marginLeft: -8,
          marginTop: -8,
          backgroundColor: "#0B0B45",
          width: "70px",
          height: "710px"
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 1, md: 1 }}
        >
          <Item style={{ backgroundColor: "#0B0b45" }}>
            <img
              src={Ezworks}
              alt="Ezworkslogo"
              style={{ width: "40px", height: "40px" }}
            />
          </Item>
          <Item
            style={{ width: "20px", height: "20px", backgroundColor: "pink" }}
          ></Item>
          <Item
            style={{ width: "20px", height: "20px", backgroundColor: "pink" }}
          ></Item>
          <Item
            style={{ width: "20px", height: "20px", backgroundColor: "pink" }}
          ></Item>
        </Stack>
      </div>
    </>
  );
}
