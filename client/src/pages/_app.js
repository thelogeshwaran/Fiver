import AuthWrapper from "@/components/AuthWrapper";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div>
        <Component {...pageProps} />
      </div>
      <AuthWrapper />
      <Footer />
    </div>
  );
}
