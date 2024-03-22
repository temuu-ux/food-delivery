import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
const Layout = ({ children }:{children:React.ReactNode}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
