import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const OrderOption3 = () => {
  const [town, setTown] = React.useState("");
  const [color, setColor] = React.useState("#F7F7F8");

  const handleChange = (event: SelectChangeEvent) => {
    setTown(event.target.value as string);

    switch (event.target.value) {
      case "Нархан хотхон":
        setColor("#18BA51");
        break;
      case "26-р байр":
        setColor("#FFC107");
        break;
      case "Хоймор хотхон":
        setColor("#FF5722");
        break;
      case "45-р байр":
        setColor("#9C27B0");
        break;
      case "Зайсан хотхон":
        setColor("#2196F3");
        break;
      default:
        setColor("#F7F7F8");
        break;
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Байр гудамж сонгоно уу
        </InputLabel>

        <Select
          sx={{ bgcolor: color, color: "#FFFFFF" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={town}
          label="string"
          onChange={handleChange}
        >
          <MenuItem value={"Нархан хотхон"}>Нархан хотхон</MenuItem>
          <MenuItem value={"26-р байр"}>26-р байр</MenuItem>
          <MenuItem value={"Хоймор хотхон"}>Хоймор хотхон</MenuItem>
          <MenuItem value={"45-р байр"}>45-р байр</MenuItem>
          <MenuItem value={"Зайсан хотхон"}>Зайсан хотхон </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
