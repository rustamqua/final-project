import Head from "next/head";
import React, { Fragment } from "react";
const Header = () => {
  return (
    <div>
      <Head>
        <title>footgift</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        body {
          background: white;
          margin: 0;
          padding: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
export default Header;
