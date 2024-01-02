import AuthWrapper from "@/components/AuthWrapper";
import Footer from "@/components/Footer";
import { StateProvider } from "@/context/StateContext";
import { initialState, reducer } from "@/context/StateReducers";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider intialState={initialState} reducer={reducer}>
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </StateProvider>
  );
}
