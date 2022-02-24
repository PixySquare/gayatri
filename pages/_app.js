import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <meta name="description" content="Best Coaching Institute in Dwarka , Delhi.Shape your Child's bright future and set a strong learning foundation. Our focus upon building Strong conceptual understanding of topics among students helps students achieve our desired results , Classes available for grades 8th to 12th"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
