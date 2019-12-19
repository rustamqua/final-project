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
import StyledMainPage from "./StyledMain";

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
        <div>
          <h1>ПОПУЛЯРНЫЕ ФУТБОЛЬНЫЕ КАРТОЧКИ ТЕПЕРЬ В КАЗАХСТАНЕ</h1>
          <h2>
            ИГРАЕШЬ В ФИФА? УЖЕ СОБРАЛ СВОЙ ULTIMATE TEAM? А ЧТО ЕСЛИ МЫ МОЖЕМ
            РЕАЛИЗОВАТЬ ТВОИ ЛУЧШИЕ КАЧЕСТВА В НАВЫКАХ ФУТБОЛА И НЕ ТОЛЬКО В
            ВИДЕ РЕДКОЙ КАРТОЧКИ FIFA?
          </h2>
          <h2>ПОПРОБУЙ СОЗДАТЬ СВОЮ ПЕРСОНАЛЬНУЮ ULTIMATE КАРТОЧКУ</h2>
        </div>
        <Link href="/cardConstructor">
          <Button className="create" color="secondary">
            <strong>Создать карточку</strong>
          </Button>
        </Link>
      </div>

      <div className="descrflex">
        <img
          className={"animated fadeInRight"}
          src="../static/firstland.jpg"
        ></img>
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
