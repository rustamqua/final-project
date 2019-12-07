import React, { useState } from "react";
import styled from "styled-components";
import {
  Paper,
  Typography,
  Button,
  Divider,
  Container,
  IconButton,
  TextField
} from "@material-ui/core";
import Link from "next/link";
import TitlebarGridList from "./Carousel";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import emailjs from "emailjs-com";
const StyledMainPage = styled.div`
  @font-face {
    font-family: "myfont";
    src: url("../static/15775.otf");
  }
  font-family: "myfont", sans-serif;

  .banner {
    margin-top: 60px;
    img {
      margin-top: 0px;
      max-width: 100%;
      display: block;
      height: auto;
      margin-bottom: 0px;
    }
  }
  .create {
    position: relative;
    margin-top: -300px;
    margin-left: 250px;
    font-size: 30px;
    color: white;
    background: rgb(246, 66, 92);
    transition: 0.5s;
    font-family: "myfont", sans-serif;
    &:hover {
      font-size: 34px;
      opacity: 0.8;
      background: red;
    }
    @media (min-width: 481px) and (max-width: 767px) {
      font-size: 14px;
      margin-left: 80px;
      margin-top: -100px;
      &:hover {
        font-size: 16px;
        opacity: 0.8;
        background: red;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-top: -150px;
      margin-left: 150px;
      font-size: 22px;
      &:hover {
        font-size: 26px;
        opacity: 0.8;
        background: red;
      }
    }
    @media (min-width: 320px) and (max-width: 480px) {
      margin-top: -70px;
      margin-left: 50px;
      font-size: 8px;
      &:hover {
        font-size: 11px;
        opacity: 0.8;
        background: red;
      }
    }
    @media (min-width: 1000px) and (max-width: 1112px) and (orientation: landscape) {
      margin-top: -200px;
      margin-left: 250px;
      font-size: 24px;
      &:hover {
        font-size: 26px;
        opacity: 0.8;
        background: red;
      }
    }
  }
  .descrflex {
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #333d58;
    justify-content: center;
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    .descrchild {
      width: 40vw;
    }
    h1 {
      font-size: 3vw;
      width: 40vw;
    }
    h2 {
      font-size: 2.8vw;
      width: 40vw;
    }
    img {
      width: 40vw;
      margin-left: 20px;
      object-fit: contain;
      position: relative;
      border-radius: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .yourcard {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    color: #28324e;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: relative;
      margin-top: -2vh;
      margin-bottom: 20px;
      width: 40vw;
      object-fit: contain;
      border-radius: 20px;
    }
    h2 {
      width: 40vw;
      margin-left: 20px;
      font-size: 4vw;
    }
  }
  .yourcard2 {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    color: #28324e;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: relative;
      margin-top: -2vh;
      margin-bottom: 20px;
      width: 40vw;
      object-fit: contain;
      border-radius: 20px;
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -o-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    h2 {
      width: 40vw;
      margin-left: 20px;
      font-size: 4vw;
    }
  }
  .contact {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    .items1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40vw;
      background: rgb(246, 66, 92);
      color: white;
      margin: 10px;
      text-align: center;
      border-radius: 10px;
      flex-direction: column;
    }
    h3 {
      margin-top: 5px;
      margin-bottom: 5px;
    }
    @media (min-width: 320px) and (max-width: 500px) {
      font-size: 8px;
    }
  }
  h6 {
    font-size: 3vw;
    width: 50vw;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 320px) and (max-width: 500px) {
      font-size: 12px;
      width: 70vw;
      margin-top: 30px;
    }
  }
  form {
    display: flex;
    justify-content: center;
    button {
      margin-left: 10px;
    }
  }
`;
const forlogo = () => {
  const [phoneEmail, setPhoneEmail] = useState({ email: "" });
  const PhoneEmail = e => {
    setPhoneEmail({ email: e.target.value });
  };
  const Submit = () => {
    emailjs
      .send(
        "gmail",
        "template_HFfnQkrT",
        phoneEmail,
        "user_V40rPObUReDEbGm9pj6D0"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <StyledMainPage>
      <div className="banner">
        <img src="../static/bannertext.png"></img>
      </div>
      <Button className="create" color="secondary">
        <strong>Создать карточку</strong>
      </Button>
      <div className="descrflex">
        <div className="descrchild">
          <h1 className={"animated fadeInLeft"}>
            Закажи карту со своим изображением себя или своего лучшего игрока в
            фифа
          </h1>
          <h2>
            Фанаты футбола по всему миру уже давно приобрели подобные карты.
            Футбольные карточки - это лучший подарок себе и любителям футбола,
            классный декор,преданность FIFA
          </h2>
        </div>
        <img
          className={"animated fadeInRight"}
          src="../static/firstland.jpg"
        ></img>
      </div>
      <div className="yourcard">
        <img src="../static/yourcard.jpg"></img>
        <h2>
          Просто выбери любое фото, а его отредактирует профессиональный
          дизайнер
        </h2>
      </div>
      <div className="yourcard2">
        <h2>
          Подари своему парню футболисту лучший подарок - закажи ему карту!
        </h2>
        <img src="../static/pair.jpg"></img>
      </div>
      <div className="contact">
        <div className="items1">
          <div>
            <PhoneIcon fontSize="large"></PhoneIcon>
          </div>
          <h3>+7(777)2418771</h3>
          <h3>+7(727)2418771</h3>
          <h3>Valikhanov str.84</h3>
        </div>
        <div className="items1">
          <EmailIcon fontSize="large"></EmailIcon>
          <h3>email: fustore@gmail.com</h3>
          <h3>Instagram: @futstorekz</h3>
          <h3>VK: Futstore.kz</h3>
          <h3>Facebook: Futstore.kz</h3>
        </div>
      </div>
      <h6>
        Хочешь заказать карту, или есть вопросы по сотрудничеству? Отправьте нам
        свою почту или номер телефона, и мы с вами свяжемся
      </h6>
      <form>
        <TextField
          placeholder="email@gmail.com"
          onChange={PhoneEmail}
        ></TextField>
        <Button variant="contained" color="secondary" onClick={Submit}>
          Связаться
        </Button>
      </form>
    </StyledMainPage>
  );
};
export default forlogo;
