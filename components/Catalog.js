import React from "react";
import StyledCatalog from "./StyledCatalog";
import { Button, Paper } from "@material-ui/core";
import Link from "next/link";
const setDesign = () => {
  localStorage.setItem("Design", JSON.stringify("designcard1"));
};
const setUltimate = () => {
  localStorage.setItem("Ultimate", JSON.stringify("ultimatecard"));
};
const Catalog = () => {
  return (
    <StyledCatalog>
      <div>
        <div className="section">
          <h2>КАТАЛОГ FUTSTORE</h2>
          <h3>
            У тебя будет единственная карта в своем роде. Потому что каждая наша
            карта - уникальна.
          </h3>
        </div>

        <div className="productWrapper">
          <Paper elevation="5" className="product">
            <div>
              <div className="imgContainer">
                <img src="../static/first_i.png"></img>
              </div>
              <p className="price">5990тг.</p>
              <p className="productDescr">Создать персональную карточку</p>
            </div>
            <Link href="/cardConstructor">
              <Button variant="contained" color="secondary">
                СОЗДАТЬ
              </Button>
            </Link>
          </Paper>
          <Paper elevation="5" className="product">
            <div>
              <div className="imgContainer">
                <img src="../static/7SEV_i.png"></img>
              </div>
              <p className="price">5990тг.</p>
              <p className="productDescr">Заказать дизайнерскую карточку</p>
            </div>
            <Button variant="contained" color="secondary" onClick={setDesign}>
              В корзину
            </Button>
          </Paper>
          <Paper elevation="5" className="product">
            <div>
              <div className="imgContainer">
                <img src="../static/7SEV_i.png"></img>
              </div>
              <p className="price">5990тг.</p>
              <p className="productDescr">Заказать Ultimate team карточку</p>
            </div>
            <Button variant="contained" color="secondary" onClick={setUltimate}>
              В корзину
            </Button>
          </Paper>
        </div>
      </div>
    </StyledCatalog>
  );
};
export default Catalog;
