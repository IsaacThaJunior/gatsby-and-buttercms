import * as React from "react";
// import axios from "axios";

import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import Items from "../components/Items";
import Features from "../components/Features";
import Extra from "../components/Extra";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

// const URL = `https://api.buttercms.com/v2/posts/example-post?auth_token=${process.env.BUTTER_CMS_API_KEY}`;
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
