import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function ColorTabs({ value, onChange }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={onChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="one" label="Latest" />
        <Tab value="two" label="Parameters" />
        <Tab value="three" label="Sim" />
      </Tabs>
    </Box> 
  );
}