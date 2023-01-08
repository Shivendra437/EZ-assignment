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
  display: "flex",
  justifyContent: "space-between",
  color: "grey"
};
let arr = {
  Service: "Arabic language",
  units: "words",
  lastprice: "0.1AED",
  offeredPrice: "0.09AED",
  Discount: "10%(19%)"
};
var arr2 = [];
arr2.push(arr);
arr2.push(arr);
arr2.push(arr);
export default function Reuse(props) {
  return (
    <Box sx={{ width: "600px" }}>
      <Stack>
        <Item style={abc}>
          <span>Service</span>
          <span>Units</span>
          <span>LastPrice</span>
          <span>Offered Price</span>
          <span>Discount</span>
        </Item>
      </Stack>
      <Stack>
        {arr2.map((el) => (
          <Item style={abc}>
            <span>{el.Service}</span>
            <span>{el.units}</span>
            <span>{el.lastprice}</span>
            <span>{el.offeredPrice}</span>
            <span>{el.Discount}</span>
          </Item>
        ))}
      </Stack>
    </Box>
  );
}
