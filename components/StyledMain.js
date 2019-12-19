import styled from "styled-components";

const StyledMainPage = styled.div`
  @font-face {
    font-family: "myfont";
    src: url("../static/15775.otf");
  }
  font-family: "myfont", sans-serif;

  .banner {
    margin-top: 60px;
    background: url("../static/maybefinal.png");
    height: 100vh;
    background-size: cover;
    div {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      margin-top: 20vh;
      margin-right: 30vw;
      width: 50vw;
      display: inline-block;
      color: #001c55;
    }
    h2 {
      margin-right: 30vw;
      width: 50vw;
      color: #00072d;
      display: inline-block;
    }
    button {
      margin-left: 10vw;
    }
    @media (min-width: 481px) and (max-width: 767px) {
      h1 {
      }
      h2 {
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      h1 {
      }
      h2 {
      }
    }
    @media (min-width: 100px) and (max-width: 480px) {
      background: url("../static/maybefinal.png") 30% 30%;
      h1 {
        margin-right: 0px;
        margin-top: 40px;
        font-size: 20px;
        text-align: center;
      }
      h2 {
        margin-right: 0px;
        font-size: 18px;
        text-align: center;
      }
      button {
        font-size: 22px;
        margin-left: 100px;
      }
    }
    @media (min-width: 1025px) and (max-width: 2000px) and (orientation: landscape) {
      h1 {
        font-size: 60px;
      }
    }
  }
  .create {
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
  }
  .descrflex {
    margin-top: -20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #333d58;
    justify-content: center;
    height: 100vh;
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
      width: 40vw;
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
        margin-right: 0px;
      }
    }
  }
  .yourcard {
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
        width: 60vw;
        margin-left: 0px;
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

    @media (max-width: 500px) {
      font-size: 22px;
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

    @media (max-width: 500px) {
      input {
        width: 50vw;
      }
    }
  }
`;

export default StyledMainPage;
