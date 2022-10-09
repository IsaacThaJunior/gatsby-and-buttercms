import * as React from "react";
// import axios from "axios";

import Navigation from "../components/Navigation";
import Contacts from "../components/Contact";

// const URL = `https://api.buttercms.com/v2/posts/example-post?auth_token=${process.env.BUTTER_CMS_API_KEY}`;
const IndexPage = () => {
  return (
    <main className="h-screen">
      <Navigation />
      <Contacts />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Contact Page</title>;
