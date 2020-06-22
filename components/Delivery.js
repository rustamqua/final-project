import React from "react";
import StyledDelivery from "./StyledDelivery";
import Divider from '@material-ui/core/Divider';

export const Delivery = () => {
  return (
    <StyledDelivery>
      <div>
        <div className="section">
          <h2>ДОСТАВКА FUTSTORE</h2>
        </div>
        <div classname="deliverydescr" style={{ margin: "20px" }}>
        <h3>ПО АЛМАТЕ И АСТАНЕ ДОСТАВКА БЕСПЛАТНАЯ</h3>
        <Divider></Divider>
          <div>
            <h3>ПО КАЗАХСТАНУ И СНГ</h3>
            <p>
              Доставку отправляем через транспортную компанию АЛЕМ ТАТ, Обычно
              стоимость доставки транспортными компаниями от 1000(цена не
              утверждена).
            </p>
            <Divider></Divider>
          </div>
          <div>
            <h3>СРОЧНАЯ ДОСТАВКА</h3>
            <p>
              Если нужно срочно доставить к какой то определенной дате - звоните
              или оставляйте заявку, y нас есть опыт срочной доставки в разные
              города Казахстана.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            По всем вопросам: +7702 215 09 00 futstore@gmail.com
          </div>
        </div>
      </div>
    </StyledDelivery>
  );
};
