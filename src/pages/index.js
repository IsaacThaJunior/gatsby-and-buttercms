import * as React from "react";
// import axios from "axios";

import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import Items from "../components/Items";

// const URL = `https://api.buttercms.com/v2/posts/example-post?auth_token=${process.env.BUTTER_CMS_API_KEY}`;
const IndexPage = () => {
  return (
    <main className="h-screen">
      <Navigation />
      <Welcome />
      <Items />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
