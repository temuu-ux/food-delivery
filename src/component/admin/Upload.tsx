import {
  Button,
  CardMedia,
  CircularProgress,
  Container,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CLOUD_NAME = "drpt056a0";
const UPLOAD_PRESET = "dwbpiep4";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      setFile(event.target.files[0]);
    }
  };

  const uploadHandler = async () => {
    if (file) {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      console.log(res);
      const resJson = await res.json();
      console.log(resJson);
      if (resJson.url) {
        setImageUrl(resJson.url);
      }
      setLoading(false);
    }
  };
  return (
    <Container>
      <Stack>
        {loading && (
          <Stack
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <Typography>Loading..</Typography>
            <CircularProgress />
          </Stack>
        )}
        <Stack direction={"row"}>
          <Input type="file" onChange={fileChangeHandler}></Input>
          <Button onClick={uploadHandler}>Upload</Button>
          {imageUrl && (
            <CardMedia
              component={"img"}
              src={imageUrl}
              width={284}
              height={122}
              alt="uploaded"
            />
          )}
        </Stack>
      </Stack>
    </Container>
  );
};
export default Upload;
