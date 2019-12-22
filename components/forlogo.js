import React, { useState } from "react";
import styled from "styled-components";
import {
  Paper,
  Typography,
  Button,
  Divider,
  Container,
  IconButton,
  TextField,
  FormControl,
  MenuItem
} from "@material-ui/core";
import Link from "next/link";
import TitlebarGridList from "./Carousel";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import emailjs from "emailjs-com";
import StyledMainPage from "./StyledMain";
import Select from "./Select";
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
        <Container maxWidth="sm">
          <div>
            <h1>ПОПУЛЯРНЫЕ ФУТБОЛЬНЫЕ КАРТОЧКИ ТЕПЕРЬ В КАЗАХСТАНЕ</h1>
            <h2>
              ИГРАЕШЬ В ФИФА? УЖЕ СОБРАЛ СВОЙ ULTIMATE TEAM? А ЧТО ЕСЛИ МЫ МОЖЕМ
              РЕАЛИЗОВАТЬ ТВОИ ЛУЧШИЕ КАЧЕСТВА В НАВЫКАХ ФУТБОЛА И НЕ ТОЛЬКО В
              ВИДЕ РЕДКОЙ КАРТОЧКИ FIFA?
            </h2>
            <h2>ПОПРОБУЙ СОЗДАТЬ СВОЮ ПЕРСОНАЛЬНУЮ ULTIMATE КАРТОЧКУ</h2>
            <img src="../static/4.png"></img>
            <Link href="/cardConstructor">
              <Button className="create" variant="contained" color="secondary">
                <strong>Создать карточку</strong>
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      <div className="banner2">
        <Container maxWidth="sm">
          <div>
            <h2 className="question">
              ЧТО ТАКОЕ ПЕРСОНАЛЬНАЯ ULTIMATE КАРТОЧКА?
            </h2>
            <h2 className="answer">
              ЭТО ОТРАЖЕНИЕ УНИКАЛЬНЫХ СПОСОБНОСТЕЙ, ТАЛАНТОВ, УМЕНИЙ И РЕЙТИНГА
            </h2>
            <img src="../static/3.png"></img>
          </div>
        </Container>
      </div>
      <div className="threephotos">
        <div className="photocontainer">
          <img src="../static/firstland.jpg"></img>
          <h3>БУДЬ КРЕАТИВНЕЕ</h3>
          <p>
            ПОМИМО ФУТБОЛЬНЫХ, МЫ ДЕЛАЕМ И ИНДИВИДУАЛЬНЫЕ КАРТОЧКИ С ВАШИМ
            ДИЗАЙНОМ
          </p>
        </div>
        <div className="photocontainer">
          <img src="../static/yo.png"></img>
          <h3>СТАНЬ БЛИЖЕ К СВОИМ КУМИРАМ</h3>
        </div>
        <div className="photocontainer">
          <img src="../static/pair.jpg"></img>
          <h3>УДИВИ СВОЕГО ПАРНЯ</h3>
          <p style={{ textTransform: "uppercase" }}>
            Подари своему парню футболисту лучший подарок - закажи ему карту!
          </p>
        </div>
      </div>
      <div className="descrflex">
        <img src="../static/DDD.png"></img>
        <div className="descrchild">
          <h1 className={"animated fadeInLeft"}>
            ИЗ ЧЕГО СДЕЛАНА КАРТОЧКА? Основа из дерева 10мм + прозрачный пластик
            + цветная печать карточки = твоя качественная и прочная карточка
          </h1>
          <h2>Есть вопрос ? Загляни в FAQ</h2>
          <Button variant="contained" color="primary">
            ВОПРОС-ОТВЕТ
          </Button>
        </div>
      </div>
      <div className="yourcard">
        <img src="../static/yourcard.jpg"></img>
        <div className="descrchild">
          <h2>ПРИОБРЕТАЙ ULTIMATE КАРТОЧКУ СЕГОДНЯ</h2>
          <h2>
            Фанаты футбола по всему миру уже давно приобрели такие же карточки,
            а ты все еще думаешь?
          </h2>
          <Button variant="contained" color="primary">
            За покупками
          </Button>
        </div>
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
      <Paper elevation="10" className="paper">
        <form>
          <TextField placeholder="Имя" onChange={PhoneEmail}></TextField>
          <TextField
            placeholder="Номер телефона"
            onChange={PhoneEmail}
          ></TextField>
          <Select></Select>
          <Button variant="contained" color="secondary" onClick={Submit}>
            Связаться
          </Button>
        </form>
      </Paper>
    </StyledMainPage>
  );
};
export default forlogo;
