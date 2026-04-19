import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Poorvansh Nandwar | ML Engineer & Data Scientist</title>
        <meta
          name="description"
          content="Poorvansh Nandwar is an ML Engineer | Data Scientist | Gen AI Enthusiast specializing in building intelligent systems with AI & Data Science."
        />
        <meta
          name="keywords"
          content="machine-learning, data-science, ai, ml-engineering, nlp, deep-learning, python, portfolio"
        />
        <meta name="author" content="Poorvansh Nandwar" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
