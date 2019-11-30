import React from "react";
import styled from "styled-components";
const A = styled.div`
  img {
    display: flex;
    margin-left: auto;
    margin-right: auto;

    width: 80vw;
    height: 80vh;
  }
`;
function MyImage() {
  return (
    <div>
      <img src="/logo.png"></img>
      <style jsx>
        {`
          img {
            display: flex;
            margin-left: auto;
            margin-right: auto;

            width: 80vw;
            height: 80vh;
          }
        `}
      </style>
    </div>
  );
}
export default MyImage;
