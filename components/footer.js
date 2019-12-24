import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const Styled = styled.div`
  margin-top: 100px;
  width: 100%;
  background: rgb(165, 225, 247);
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
      margin-left: 20px;
    }
    @media (max-width: 500px) {
      flex-direction: column;
      div {
        margin-top: 5px;
      }
    }
  }
`;
const footer = () => {
  return (
    <Styled>
      <div>
        <h2>FUTSTORE</h2>
        <div className="media">
          <div>
            <InstagramIcon></InstagramIcon>
          </div>
          <div>
            <FacebookIcon></FacebookIcon>
          </div>
        </div>
        <div className="media">
          <div>+77772418771</div>
          <div>Valikhanov str.84</div>
          <div>fustore@gmail.com</div>
        </div>
      </div>
    </Styled>
  );
};
export default footer;
