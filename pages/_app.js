import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
