import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        justifyContent="space-between"
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Item>
          Address
          <div style={{ color: "black" }}>
            <div>Line 1</div>
            <div>Line 2</div>
            {/* <div>City,Country</div>
                <div>Zip code</div> */}
          </div>
        </Item>
        <Item>
          {" "}
          Company Registration Number
          <div>UICE78609903YU</div>
        </Item>
        <Item>
          Tax Registration Number
          <div> AR568NFK</div>
        </Item>
        <Item>
          {" "}
          Company Registration Validity
          <div> 5june 2025</div>
        </Item>
      </Grid>
    </Box>
  );
}
