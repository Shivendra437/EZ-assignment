import * as React from "react";
import ClientHeading from "./ClientHeading";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
let arr = {
  name: "Company name",
  ccde: "CCDE",
  en: "8 Entities",
  user: "64 user"
};

// const[name,setName]=useState({name:'CompanyName'});
var arr2 = [];
arr2.push(arr);
arr2.push(arr);
arr2.push(arr);
arr2.push(arr);
arr2.push(arr);
arr2.push(arr);
arr2.push(arr);

export default function Client() {
  // const handler=()=>{
  //   // e.preventDefault()
  //   setName({name:'Mickey'})
  // }
  const [name, setName] = useState("CompanyName");
  return (
    <div
      style={{
        display: "flex",
        direction: "column",
        width: "100px",
        height: "100%"
      }}
    >
      <Stack dirction="column" spacing={3}>
        <ClientHeading />
        {arr2.map((el) => (
          <button
            onClick={() => setName("Mckinsey & Company")}
            style={{ border: "none" }}
          >
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
                <span>{name}</span>
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
          </button>
        ))}
      </Stack>
    </div>
  );
}
