import "../styles/globals.css";
import Head from "next/head";
import Aos from "aos";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <script src="bower_components/aos/dist/aos.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
