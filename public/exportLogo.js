import React from "react";

const exportLogo = () => {
  return (
    <>
      <img src="./Logo.png"></img>
      <style jsx>{`
        img {
          width: 100px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
export default exportLogo;
