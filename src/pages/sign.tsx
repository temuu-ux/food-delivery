import { SignUp } from "@/component/SingUp/SignUp";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      py={4}
      mt="55px"
      mb="100px"
    >
      <SignUp />
    </Stack>
  );
};
export default Page;
