import * as React from "react";
import Box from "@mui/material/Box";
import Pdf from "./Pdf.jpg";
import { Button } from "@mui/material";
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
export default function CompanyDetails() {
  return (
    <Box
      sx={{
        position: "relative",
        marginLeft: "170px",
        width: "700px",
        height: 200,
        // border: "2px solid black",
        // backgroundColor: '#DEDEDE',
        "&:hover": {
          backgroundColor: "#D3D3D3",
          opacity: [0.9, 0.8, 0.7]
        }
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box style={{ padding: "10px" }}>
          <img style={{ width: "60px" }} src={Pdf} alt="pdf logo" />
          <span
            style={{ position: "absolute", marginTop: "14px", padding: "8px" }}
          >
            Lucas Films Private Limited
          </span>
        </Box>
        <Box style={{ padding: "20px" }}>
          <Button
            style={{ width: "90px", height: "30px" }}
            variant="contained"
            color="primary"
          >
            {" "}
            Edit
          </Button>
        </Box>
      </Box>
      <Box style={{ display: "flex" }}>
        <Box style={{ padding: "10px", color: "grey" }}>
          <Box>Company Name</Box>
          <Box style={{ color: "black", padding: "2px" }}>LUCF</Box>
          <Box>
            <br />
            CompanyLogo
          </Box>
          <Box style={{ color: "black" }}>Unavaiable</Box>
        </Box>
        <Box
          style={{ padding: "8px", position: "relative", marginLeft: "100px" }}
        >
          <Box style={{ color: "grey" }}>Domains</Box>
          <Box>
            <a href="#">@lucasfilms.com</a>
          </Box>

          <Box>
            {" "}
            <a href="#">@lucasstarwar.com</a>
          </Box>
          <Box>
            <a href="#">@starwar.com</a>
          </Box>
          <Box>
            <a href="#">+5 others</a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
