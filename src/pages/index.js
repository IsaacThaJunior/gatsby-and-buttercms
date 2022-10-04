import * as React from 'react';
import axios from 'axios';
import Bigone from '../components/Bigone';

// const URL = `https://api.buttercms.com/v2/posts/example-post?auth_token=${process.env.BUTTER_CMS_API_KEY}`;
const IndexPage = () => {

	return <main>

    <h1 className="text-3xl font-bold bg-red-700 underline">Hey from IndexPage</h1>

    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa quasi modi asperiores eos. Accusantium excepturi rerum quia sint molestiae reprehenderit tempore! Dolor rerum exercitationem sequi animi quod ducimus veritatis quia a adipisci. Delectus repudiandae corporis consectetur culpa accusantium neque dignissimos nemo, sed sunt amet repellat. Tempore consequatur quos aperiam!</h3>
    <hr />

    <Bigone />
    <hr />
  </main>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
