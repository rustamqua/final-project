import React from "react";
import Header from "../../components/header";
import Nav from "../../components/nav";
import styled from "styled-components";
import { Paper, IconButton } from "@material-ui/core";
import Footer from "../../components/footer";
import DeleteIcon from "@material-ui/icons/Delete";
import CartSelect from "../../components/CartSelect";
import { TextField } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const StyledCart = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card{
    width: 250px;
    margin-bottom: 20px;
  }
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
        <Card className="card">
        <CardContent>
        <img src="../../static/7SEV_i.png"></img>
          <Typography  className="{classes.title}"
                color="textSecondary"
                gutterBottom>
                       Вы сможете договориться о дизайнерской карточке, количестве и цене
              с нашим дизайнером  
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            style={{ width: "60px" }}
            onClick={() => {
              localStorage.removeItem("Design");
              this.setState({ design: false });
            }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>{" "}
        </CardActions>
      </Card>
      );
    }
    if (this.state.ultimate) {
      ultimateContent = (
        <Card className="card">
        <CardContent>
        <img src="../../static/7SEV_i.png"></img>
          <Typography  className="{classes.title}"
                color="textSecondary"
                gutterBottom>
          Вы сможете договориться о дизайне Ultimate карточки, количестве и
              цене с нашим дизайнером
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            style={{ width: "60px" }}
            onClick={() => {
              localStorage.removeItem("Ultimate");
              this.setState({ ultimate: false });
            }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>{" "}
        </CardActions>
      </Card>
      );
    }
    let form = (
      <div className="form">
        <TextField
          placeholder="Имя"
          onChange={(e) => this.setState({ name: e.target.value })}
        ></TextField>
        <TextField
          placeholder="Номер телефона"
          onChange={(e) => this.setState({ number: e.target.value })}
        ></TextField>
        <CartSelect
          cards={JSON.stringify(this.state.cards)}
          ultimate={this.state.ultimate}
          design={this.state.design}
          name={this.state.name}
          number={this.state.number}
        ></CartSelect>
      </div>
    );
    if (this.state.cards.length || this.state.design || this.state.ultimate) { 
      content = this.state.cards.map((i, j) => {
        return (
          <Card className="card">
            <CardContent>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                Имя: {i.name}
              </Typography>
              <Typography variant="h5" component="h2">
                Позиция: {i.position}
              </Typography>
              <Typography  color="textSecondary">
                Страна: {i.country}
              </Typography>
              <Typography  color="textSecondary">
                Название Клуба: {i.clubName}
              </Typography>
              <Typography variant="body2" component="p">
                Логотип клуба:
              </Typography>
              <img style={{ width: "30px" }} src={i.logoUrl}></img>
              <Typography variant="body2" component="p">
                Фото на обработку
              </Typography>
              <img style={{ width: "100px"}} src={i.photoUrl}></img>
            </CardContent>
            <CardActions>
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
              </IconButton>{" "}
            </CardActions>
          </Card>
        );
      });
    } else {
      form = <p>Ваша корзина пуста:(</p>
    }
    return (
      <>
        <Header></Header>
        <Nav></Nav>
        <StyledCart>
          <div>{content}</div>
          <div>{ultimateContent}</div>
          <div>{designContent}</div>
          {form}
        </StyledCart>
        <Footer></Footer>
      </>
    );
  }
}
export default ShopCart;
