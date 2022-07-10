import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
