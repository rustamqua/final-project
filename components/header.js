import Head from "next/head";
import React, { Fragment } from "react";
const Header = () => {
  return (
    <div>
      <Head>
        <title>futstore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        body {
          background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          margin: 0;
          padding: 0;
          width: 100%;

          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </div>
  );
};
export default Header;
