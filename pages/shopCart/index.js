import React, { useEffect } from "react";
import Header from "../../components/header";
import Nav from "../../components/nav";
import styled from "styled-components";
import { Paper, Button, IconButton } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
const StyledCart = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .item {
    width: 60vw;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    img {
      width: 200px;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      img {
        display: inline-block;
        width: 50px;
        object-fit: cover;
      }
    }
  }
`;
class ShopCart extends React.Component {
  state = {
    cards: []
  };
  componentDidMount() {
    let data = localStorage.getItem("cards");
    if (data) {
      this.setState({ cards: JSON.parse(data) });
    } else {
      this.setState({ cards: "Ваша корзина пуста" });
    }
  }
  render() {
    let content;
    if (this.state.cards !== "Ваша корзина пуста") {
      content = this.state.cards.map((i, j) => {
        return (
          <Paper square="true" elevation="5" key={j}>
            <div className="item">
              <img src={i.background}></img>
              <div className="wrapper">
                <div>Имя: {i.name}</div>
                <div>Позиция: {i.position}</div>
                <div>Страна: {i.country}</div>
                <div>Логотип клуба:</div>
                <img src={i.logoUrl}></img>
                <div>Фото на обработку:</div>
                <img src={i.photoUrl}></img>
                <div>Показатели:</div>
                <div>
                  Рейтинг: {i.rating}, PAC: {i.pac}, DRI: {i.dri}, SHO: {i.sho},
                  DEF: {i.def}, PAS: {i.pas}, PHY: {i.phy}
                </div>
                <IconButton
                  style={{ width: "60px" }}
                  onClick={() => {
                    let temp = [...this.state.cards];
                    temp.splice(j, 1);
                    localStorage.setItem("cards", JSON.stringify(temp));
                    this.setState({ cards: temp });
                  }}
                >
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              </div>
            </div>
          </Paper>
        );
      });
    } else {
      content = this.state.cards;
    }
    return (
      <>
        <Header></Header>
        <Nav></Nav>
        <StyledCart>
          <div>{content}</div>
          <Button>Отправить Дизайнеру</Button>
        </StyledCart>
      </>
    );
  }
}
export default ShopCart;
