import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topLanguages}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Language" />}
      />
    );
  }
  
  // Top Languages in the USA
  const topLanguages = [
    { label: 'English', population: 1994 },
    { label: 'Spanish', population: 1972 },
    { label: 'Vietnamese', population: 1974 },
    { label: 'Mandarin', population: 2008 },
    { label: 'Thai', popluation: 1957 },
  ];