import React from "react";
import styled from "styled-components";
import { Paper, Typography, Button, Divider } from "@material-ui/core";
import Link from "next/link";
import TitlebarGridList from "./Carousel";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
const StyledMainPage = styled.div`
  font-size: 100px;
  hr {
    size: 30;
  }
  h4 {
    text-align: center;
    font-size: 1.8vw;
    width: 50vw;
    margin: auto;
  }

  .wrapper4 {
    margin-top: 5vh;
    font-size: 2vw;
    text-align: center;
    margin: auto;
    width: 50vw;
    height: 100vh;
  }
  hr {
    border: 2px solid black;
    width: 50vw;
    border-radius: 10px;
  }
  .wrapper5 {
    display: flex;
    justify-content: center;
  }
  .items1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 100px;
    background: white;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
    transition: 0.5s;
    &:hover {
      background: black;
      color: white;
      &::after {
        font-size: 12px;
        content: "87772418771";
      }
    }
  }
`;
const forlogo = () => {
  return (
    <StyledMainPage>
      <div>
        <h1></h1>
      </div>
      <div className="wrapper4">
        <h4>
          <strong>Главные преимущества</strong> наших карт в том, что каждая из
          них индивидуальна, сделана из дерева, и продается по очень низкой цене
          - 5900!
        </h4>
        <h6>Наши клиенты:</h6>
        <TitlebarGridList></TitlebarGridList>
      </div>
      <hr></hr>
      <h4>Есть вопросы, или предложения по сотрудничеству?</h4>
      <div className="wrapper5">
        <div className="items1">
          <PhoneIcon></PhoneIcon>
        </div>
        <div className="items1">
          <RoomIcon></RoomIcon>
        </div>
        <div className="items1">
          <EmailIcon></EmailIcon>
        </div>
      </div>
    </StyledMainPage>
  );
};
export default forlogo;
