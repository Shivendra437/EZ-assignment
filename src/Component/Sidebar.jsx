import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveStack() {
  return (
    <div  style={{ marginTop:0,backgroundColor:"violet", width:'50px' ,height:'960px'}}>
      <Stack
      direction="column"
      justifyContent='flex-start'
       alignItems='flex-start'
  
        spacing={{ xs: 1, sm: 1, md: 1 }}
      >
        <Item 
        style={{backgroundColor:'red' ,height:'40px'}}>
        </Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}
