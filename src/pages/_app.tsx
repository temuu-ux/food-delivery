import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/layout/Layout";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import { FoodContextProvider } from "@/context/Context";
import { CartContextProvider } from "@/context/CartContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <FoodContextProvider>
      <CartContextProvider>
        <CustomThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomThemeProvider>
      </CartContextProvider>
    </FoodContextProvider>
  );
};
export default App;
