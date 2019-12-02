import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const Styled = styled.div`
  margin-top: 100px;
  width: 100%;
  background: black;
  color: white;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
  }
  .media {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
    }
  }
`;
const footer = () => {
  return (
    <Styled>
      <div>
        <h2>FOOTGIFT</h2>
        <div className="media">
          <div>
            <InstagramIcon></InstagramIcon>
          </div>
          <div>
            <FacebookIcon></FacebookIcon>
          </div>
        </div>
      </div>
    </Styled>
  );
};
export default footer;
