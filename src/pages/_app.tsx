import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/layout/Layout";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import { FoodContextProvider } from "@/context/FoodContext";
import { CartContextProvider } from "@/context/CartContext";
import { OrderContextProvider } from "@/context/OrderContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <FoodContextProvider>
      <CartContextProvider>
        <OrderContextProvider>
          <CustomThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CustomThemeProvider>
        </OrderContextProvider>
      </CartContextProvider>
    </FoodContextProvider>
  );
};
export default App;
