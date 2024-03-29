import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/layout/Layout";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import { FoodContextProvider } from "@/context/Context";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <FoodContextProvider>
      
      <CustomThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </FoodContextProvider>
  );
};
export default App;
