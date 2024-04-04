import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const OrderOption1 = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Дүүрэг сонгоно уу</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="string"
          onChange={handleChange}
        >
          <MenuItem value={1}>Баянзүрх дүүрэг</MenuItem>
          <MenuItem value={2}>Хан-Уул дүүрэг</MenuItem>
          <MenuItem value={3}>Баянгол дүүрэг</MenuItem>
          <MenuItem value={4}>Сонгинохайрхан дүүрэг</MenuItem>
          <MenuItem value={5}>Чингэлтэй дүүрэг</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
