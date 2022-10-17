import * as React from "react";

import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import Items from "../components/Items";
import Features from "../components/Features";
import Extra from "../components/Extra";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <main className="h-screen">
      <Navigation />
      <Welcome />
      <Items />
      <Features />
      <Extra />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
