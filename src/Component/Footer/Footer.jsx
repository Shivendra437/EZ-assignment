import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
const abc = {
  position: "relative",
  marginLeft: "200px",
  display: "flex",
  justifyContent: "space-around",
  color: "grey"
};
let arra = {
  name: "ArabicLanguageTranslation",
  unit: "words",
  list: "0.1AED",
  price: "0.09",
  discount: "10%(19%)"
};
let arr = [];
arr.push(arra);
arr.push(arra);
arr.push(arra);

export default function Reuse(props) {
  return (
    <Box sx={{ width: "700px" }}>
      <Stack>
        <Item style={abc}>
          <span>Service</span>
          <span>Units</span>
          <span>Last Price</span>
          <span>Offered price</span>
          <span>Discount</span>
        </Item>
      </Stack>
      <Stack>
        {arr.map((el) => (
          <Item style={abc}>
            <span>{el.name}</span>
            <span>{el.unit}</span>
            <span>{el.list}</span>
            <span>{el.price}</span>
            <span>{el.discount}</span>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
