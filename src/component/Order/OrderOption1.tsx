import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const OrderOption1 = () => {
  const [region, setRegion] = React.useState("Дүүрэг сонгох"); // Changed 'age' to 'region' for clarity
  // const [color, setColor] = React.useState("#F7F7F8"); // Default color
  // console.log("region", region);
  // console.log("color", color);

  const handleRegionChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
    // Set color based on selected region
    // switch (event.target.value) {
    //   case "Баянзүрх дүүрэг":
    //     setColor("#18BA51");
    //     break;
    //   case "Хан-Уул дүүрэг":
    //     setColor("#FFC107"); // Change color code as per your preference
    //     break;
    //   case "Баянгол дүүрэг":
    //     setColor("#FF5722"); // Change color code as per your preference
    //     break;
    //   case "Сонгинохайрхан дүүрэг":
    //     setColor("#9C27B0"); // Change color code as per your preference
    //     break;
    //   case "Чингэлтэй дүүрэг":
    //     setColor("#2196F3"); // Change color code as per your preference
    //     break;
    //   default:
    //     setColor("#F7F7F8"); // Default color
    //     break;
    // }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="outlined" id="region-select-label">
          Дүүрэг сонгох
        </InputLabel>
        <Select
          sx={{
            bgcolor: region == "Дүүрэг сонгох" ? "#F7F7F8" : "#18BA51",
            // bgcolor:color,
            color: "#FFFFFF",
          }} // Set background color and text color
          labelId="region-select-label"
          id="region-select"
          value={region}
          label="Дүүрэг сонгох"
          onChange={handleRegionChange}
        >
          <MenuItem value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</MenuItem>
          <MenuItem value="Хан-Уул дүүрэг">Хан-Уул дүүрэг</MenuItem>
          <MenuItem value="Баянгол дүүрэг">Баянгол дүүрэг</MenuItem>
          <MenuItem value="Сонгинохайрхан дүүрэг">
            Сонгинохайрхан дүүрэг
          </MenuItem>
          <MenuItem value="Чингэлтэй дүүрэг">Чингэлтэй дүүрэг</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
