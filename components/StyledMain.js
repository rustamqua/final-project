import styled from "styled-components";

const StyledMainPage = styled.div`
  @font-face {
    font-family: "myfont";
    src: url("../static/15775.otf");
  }
  font-family: "myfont", sans-serif;

  .banner {
    margin-top: 60px;
    background: url("../static/firstblock_i.png");
    min-height: 100vh;
    background-size: cover;
    img {
      width: 200px;
      object-fit: cover;
      display: none;
    }
    div {
      margin-left: 14%;
      display: flex;
      flex-direction: column;
      h1 {
        margin-top: 20%;
        color: rgb(204, 49, 94);
      }
      h2 {
        color: white;
      }
      button {
        max-width: 200px;
      }
    }
    @media (min-width: 200px) and (max-width: 590px) {
      background: url("https://res.cloudinary.com/dbz6kou6o/image/upload/c_scale,q_100,w_590/v1577267825/futgift/banner1mob_cavaru.png")
        100% 100%;
      background-size: cover;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div {
        align-items: center;
        justify-content: center;
        margin-left: 0px;
        h1 {
          margin-top: 80%;
        }
      }
      button {
        margin-bottom: 200px;
      }
      h1 {
        font-size: 20px;
        max-width: 300px;
      }
      h2 {
        font-size: 14px;
        max-width: 300px;
      }
    }

    @media (min-width: 600px) and (max-width: 1025px) {
      background: url("https://res.cloudinary.com/dbz6kou6o/image/upload/q_auto/v1577267825/futgift/banner1mob_cavaru.png");
      background-size: cover;
      background-repeat: no-repeat;
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 20px;
      }
      div {
        margin: auto;
        align-items: center;
        justify-content: center;
        h1 {
          margin-top: 450px;
        }
      }
    }
  }
  .descrflex {
    margin-top: -20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #333d58;
    justify-content: center;
    min-height: 100vh;
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);

    .descrchild {
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
      width: 40%;
      margin-right: 40px;
      object-fit: contain;
      position: relative;
      border-radius: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    @media (min-width: 200px) and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div {
        align-items: center;
        justify-content: center;
        margin-left: 0px;
      }
      button {
      }
      h1 {
        font-size: 20px;
        width: 200px;
        text-align: center;
      }
      h2 {
        text-align: center;
        font-size: 20px;
        width: 200px;
      }
      img {
        display: inline-flex;
        margin-right: 0px;
        width: 200px;
      }
    }
  }

  .banner2 {
    min-height: 100vh;
    background: url("../static/6_i.png") 50% 50%;
    background-size: cover;
    div {
      display: flex;
      flex-direction: column;
    }
    h2 {
      margin-top: 20px;
      color: white;
      font-size: 46px;
      text-align: center;
    }
    .question {
    }
    .answer {
      margin-top: 400px;
      font-size: 30px;
      margin-bottom: 100px;
    }
    img {
      width: 250px;
      object-fit: cover;
      display: none;
    }
    @media (max-width: 800px) {
      background: url("https://res.cloudinary.com/dbz6kou6o/image/upload/q_auto/v1577268081/banner2mob_ewktkd.png")
        50% 50%;
      background-size: cover;
      .question {
        margin-top: 20%;
      }
      .answer {
        font-size: 24px;
        margin-top: 100%;
      }
      div {
        margin: auto;
        align-items: center;
      }
      h2 {
        text-align: center;
        font-size: 24px;
      }
      img {
        display: inline-flex;
      }
    }
  }
  .threephotos {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    .photocontainer {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin-top: 100px;
      align-items: center;
      text-align: center;
      img {
        margin-left: auto;
        margin-right: auto;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    @media (max-width: 700px) {
      flex-direction: column;
      .photocontainer {
        width: auto;
        text-align: center;
      }
    }
  }
  .yourcard {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    color: #28324e;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    button {
      margin-left: 50%;
    }
    img {
      margin-top: 20px;
      margin-bottom: 20px;
      width: 40%;
      object-fit: contain;
      border-radius: 20px;
    }
    h2 {
      width: 40vw;
      margin-left: 20px;
      font-size: 4vw;
    }
    @media (min-width: 200px) and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 20px;
        width: 20px;
        text-align: center;
      }
      h2 {
        text-align: center;
        font-size: 26px;
        width: 200px;
      }
      img {
        width: 200px;
        margin-left: 0px;
      }
      button {
        margin-left: 20%;
      }
    }
  }
  .yourcard2 {
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    color: #28324e;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

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
    @media (min-width: 200px) and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 26px;
        width: 200px;
        text-align: center;
      }
      h2 {
        text-align: center;
        font-size: 26px;
        width: 200px;
      }
      img {
        margin-top: 20px;
        width: 60vw;
        margin-left: 0px;
      }
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
    font-size: 4vw;
    width: 50vw;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 22px;
      width: 70vw;
      margin-top: 30px;
    }
  }
  .paper {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input {
      width: 200px;
      margin-top: 20px;
    }
    button {
      margin-left: 10px;
      width: 100px;
    }

    @media (max-width: 500px) {
      input {
        width: 50vw;
      }
    }
  }
`;

export default StyledMainPage;
