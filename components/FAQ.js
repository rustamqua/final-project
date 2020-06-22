import React from "react";
import StyledFaq from "./StyledFaq";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export const FAQ = () => {
  const classes = useStyles();
  return (
    <StyledFaq>
      <div>
        <div className="section">
          <h2>ВОПРОС - ОТВЕТ</h2>
          <h3>ОТВЕЧАЕМ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
        </div>
        <div style={{ padding: "20px" }}>
          <h3> КАК ПРОИСХОДИТ ЗАКАЗ ? </h3>
          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
          >
            <ListItem>
              <ListItemText
                primary="ОСТАВЛЯЕТЕ ЗАЯВКУ Положите в корзину понравившийся вид карточки и
            оставьте ваши контакты. Мы свяжемся с вами в течение часа."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="ОБСУЖДАЕМ ЗАКАЗ Обсудим детали: качество фотографии, доставку."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="ОПЛАТА И МАКЕТ После оплаты делаем макет: ретушируем фото, убираем
                фон и вписываем показатели. Макет согласовываем с вами."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="ИЗГОТОВЛЕНИЕ КАРТОЧКИ Утвержденный макет отправляем в печать. По
                готовности отправляем карточку курьером или транспортной компанией."
              />
            </ListItem>
            <Divider />
          </List>
          <h3>КАК ПОДОБРАТЬ ФОТО?</h3>
          <List>
          <ListItem>
              <ListItemText
                primary="Качественным изображением для вашей индивидуальной карточки Fifa
                Uiltimate Team можно считать файл .JPEG"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Размер фото в пикселях должен быть не менее 1000x1500 и выше. Чем
                больше это число, тем лучше. Проверить их можно очень просто - в
                свойствах файла"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Фон не имеет значения, так как мы его всё равно вырежем. И даже
                сделаем небольшую ретушь."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Есть фотографии только с телефона? Без проблем, но лучше всего если
                они сделаны днём при хорошем освещении."
              />
            </ListItem>
            <Divider />
          </List>
        </div>
        <p style={{ textAlign: "center" }}>
          Сроки изготовления и доставка Изготовление карточек занимает от 2 до 5
          рабочих дней. Карточку отправляем на следующий день после готовности.
          Если нужно быстрее - звоните, мы постараемся найти решение
        </p>
      </div>
    </StyledFaq>
  );
};
