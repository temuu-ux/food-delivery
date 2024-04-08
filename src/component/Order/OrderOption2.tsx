import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const OrderOption2 = () => {
  const [committee, setCommittee] = React.useState("");
  const [color, setColor] = React.useState("#F7F7F8");

  const handleChange = (event: SelectChangeEvent) => {
    setCommittee(event.target.value as string);

    switch (event.target.value) {
      case "1-р хороо":
        setColor("#18BA51");
        break;
      case "2-р хороо":
        setColor("#FFC107");
        break;
      case "3-р хороо":
        setColor("#FF5722");
        break;
      case "4-р хороо":
        setColor("#9C27B0");
        break;
      case "5-р хороо":
        setColor("#2196F3");
        break;
      case "6-р хороо":
        setColor("#0000b3");
        break;
      case "7-р хороо":
        setColor("#cb3434");
        break;
      default:
        setColor("#F7F7F8");
        break;
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Хороо сонгоно уу</InputLabel>

        <Select
          sx={{ bgcolor: color, color: "#FFFFFF" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={committee}
          label="string"
          onChange={handleChange}
        >
          <MenuItem value="1-р хороо">1-р хороо</MenuItem>
          <MenuItem value="2-р хороо">2-р хороо</MenuItem>
          <MenuItem value="3-р хороо">3-р хороо</MenuItem>
          <MenuItem value="4-р хороо">4-р хороо</MenuItem>
          <MenuItem value="5-р хороо">5-р хороо</MenuItem>
          <MenuItem value="6-р хороо">6-р хороо</MenuItem>
          <MenuItem value="7-р хороо">7-р хороо</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
