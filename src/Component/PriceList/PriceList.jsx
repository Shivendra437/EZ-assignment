import * as React from 'react';
import Box from '@mui/material/Box';
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
const abc={
  display:'flex',
  justifyContent:'space-around',
    color:'grey',
  }


export default function Reuse(props) {
  return (
    <Box sx={{ width: '600px' }}>
      <Stack  >
        <Item style={abc}>
           <span>{props.Location}</span>
           <span>hi</span>
           <span>hi</span>
          <span>hi</span>
          <span>hi</span>
           </Item>
      </Stack>
    </Box>
  );
}
