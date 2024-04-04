import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const OrderOption3 = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Байр гудамж сонгоно уу
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="string"
          onChange={handleChange}
        >
          <MenuItem value={1}>Нархан хотхоно</MenuItem>
          <MenuItem value={2}>26-р байр</MenuItem>
          <MenuItem value={3}>Хоймор хотхон</MenuItem>
          <MenuItem value={4}>45-р байр</MenuItem>
          <MenuItem value={5}>Зайсан хотхон </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
