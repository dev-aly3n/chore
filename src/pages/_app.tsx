// types
import type { AppProps } from "next/app";
// libs
// components
// hooks
// store
// utils & animation
import "../../styles/tailwind.css";

// import { Web3ContextProvider } from "../store/context/Web3Context";
function MyApp({ Component, pageProps }: AppProps) {
  return (

              <Component {...pageProps} />

  );
}

export default MyApp;
