import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const UserProfile = () => {
  return (
    <Container sx={{ justifyContent: "center", display: "flex", mb: 12 }}>
      <Stack
        width={"432px"}
        justifyContent={"center"}
        direction={"row"}
        flexDirection={"column"}
        px={"20px"}
      >
        <Stack width={"392px"} gap={3}>
          <Box
            gap={5}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar
              sx={{ width: 120, height: 120 }}
              alt="Remy Sharp"
              src="/Max.svg"
            />
            <Typography variant="h5" fontSize={"28px"}>
              УгтахБаяр
            </Typography>
          </Box>
          <Stack gap={2}>
            <TextField
              variant="outlined"
              id="input-with-icon-textfield"
              label="Таны нэр"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ModeOutlinedIcon sx={{ color: "#18BA51" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              id="input-with-icon-textfield"
              label="Утасны дугаар"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CallOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ModeOutlinedIcon sx={{ color: "#18BA51" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              id="input-with-icon-textfield"
              label="Имэйл хаяг"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ForwardToInboxOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ModeOutlinedIcon sx={{ color: "#18BA51" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 1,
                variant: "button",
                color: "#0D1118",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  width: 48,
                  height: 48,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #EEEFF2",
                }}
              >
                <HistoryOutlinedIcon sx={{ width: 30, height: 30 }} />
              </Box>

              <Typography>Захиалгын түүх</Typography>
            </Button>
            <Button
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: 1,
                variant: "button",
                color: "#0D1118",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  width: 48,
                  height: 48,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #EEEFF2",
                }}
              >
                <LogoutOutlinedIcon sx={{ width: 30, height: 30 }} />
              </Box>

              <Typography>Гарах</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
