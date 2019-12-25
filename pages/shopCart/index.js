import React, { useEffect } from "react";
import Header from "../../components/header";
import Nav from "../../components/nav";
import styled from "styled-components";
import { Paper, Button, IconButton } from "@material-ui/core";
import Footer from "../../components/footer";
import DeleteIcon from "@material-ui/icons/Delete";
import CartSelect from "../../components/CartSelect";
import { TextField } from "@material-ui/core";
const StyledCart = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      margin-top: 20px;
    }
  }
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
    @media (max-width: 500px) {
      font-size: 14px;
      img {
        width: 100px;
      }
    }
  }
`;
class ShopCart extends React.Component {
  state = {
    cards: [],
    ultimate: false,
    design: false,
    name: "",
    number: ""
  };
  componentDidMount() {
    let data = localStorage.getItem("cards");
    let ult = localStorage.getItem("Ultimate");
    let des = localStorage.getItem("Design");
    if (data) {
      this.setState({ cards: JSON.parse(data) });
    }
    if (ult) {
      this.setState({ ultimate: true });
    }
    if (des) {
      this.setState({ design: true });
    }
  }
  render() {
    let content;
    let ultimateContent;
    let designContent;
    if (this.state.design) {
      designContent = (
        <Paper square="true" elevation="5">
          <div className="item" style={{ flexDirection: "column" }}>
            <img src="../../static/7SEV_i.png"></img>
            <p>
              Вы сможете договориться о дизайнерской карточке, количестве и цене
              с нашим дизайнером
            </p>
            <IconButton
              style={{ width: "60px" }}
              onClick={() => {
                localStorage.removeItem("Design");
                this.setState({ design: false });
              }}
            >
              <DeleteIcon></DeleteIcon>
            </IconButton>
          </div>
        </Paper>
      );
    }
    if (this.state.ultimate) {
      ultimateContent = (
        <Paper square="true" elevation="5">
          <div className="item" style={{ flexDirection: "column" }}>
            <img src="../../static/7SEV_i.png"></img>
            <p>
              Вы сможете договориться о дизайне Ultimate карточки, количестве и
              цене с нашим дизайнером
            </p>
            <IconButton
              style={{ width: "60px" }}
              onClick={() => {
                localStorage.removeItem("Ultimate");
                this.setState({ ultimate: false });
              }}
            >
              <DeleteIcon></DeleteIcon>
            </IconButton>
          </div>
        </Paper>
      );
    }
    if (this.state.cards !== "Ваша корзина пуста") {
      content = this.state.cards.map((i, j) => {
        return (
          <Paper square="true" elevation="5" key={j}>
            <div className="item" style={{ flexDirection: "column" }}>
              <img src={i.background}></img>
              <div className="wrapper">
                <div>Имя: {i.name}</div>
                <div>Позиция: {i.position}</div>
                <div>Страна: {i.country}</div>
                <div>Логотип клуба:</div>
                <div>Название клуба: {i.clubName}</div>
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
          <div>{ultimateContent}</div>
          <div>{designContent}</div>
          <div className="form">
            <TextField
              placeholder="Имя"
              onChange={e => this.setState({ name: e.target.value })}
            ></TextField>
            <TextField
              placeholder="Номер телефона"
              onChange={e => this.setState({ number: e.target.value })}
            ></TextField>
            <CartSelect
              cards={JSON.stringify(this.state.cards)}
              ultimate={this.state.ultimate}
              design={this.state.design}
              name={this.state.name}
              number={this.state.number}
            ></CartSelect>
          </div>
        </StyledCart>
        <Footer></Footer>
      </>
    );
  }
}
export default ShopCart;
