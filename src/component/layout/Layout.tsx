import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import { Stack } from "@mui/material";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <Header />
      <main>{children}</main>
      <Footer />
    </Stack>
  );
};
export default Layout;
