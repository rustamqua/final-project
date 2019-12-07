import styled from "styled-components";
const StyledJustCard = styled.div`
  @font-face {
    font-family: "myfont";
    src: url("../static/15775.otf");
  }
  font-family: "myfont", sans-serif;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  margin-top: 100px;
  input {
    color: #333d58;
  }
  .rating {
    display: inline-block;
    color: ${props => props.fcolor};
    font-size: 40px;
    margin-top: 40px;
    margin-left: 50px;
    margin-bottom: 0px;
  }
  .position {
    display: inline-block;
    color: ${props => props.fcolor};
    font-size: 22px;
    margin-left: 45px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .country {
    display: inline-block;
    object-fit: cover;
    margin-left: 45px;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 40px;
  }
  .club {
    object-fit: cover;
    width: 40px;
    height: 52px;
    margin-left: 45px;
  }
  .name {
    color: ${props => props.fcolor};
    display: flex;
    justify-content: center;
    margin-right: 50px;
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .pacedri {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    .char1 {
      color: ${props => props.fcolor};
      margin-left: 50px;
      margin-bottom: 0px;
      margin-top: 5px;
    }
    .char2 {
      color: ${props => props.fcolor};
      margin-right: 100px;
      margin-bottom: 0px;
      margin-top: 5px;
    }
  }
  .nonram {
    margin-left: 50px;
    background: ${props => `url(${props.background})`};
    background-size: 250px auto;
    background-repeat: no-repeat;
    height: 380px;
    width: 300px;
  }
  .root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .field {
      margin: 10px;
    }
  }
  .option {
    font-size: 15px;
  }
  .upload1 {
    margin-top: 100px;
  }
  .userPhoto {
    margin-top: 20px;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    img {
      margin-top: 20px;
      width: 45vw;
      object-fit: cover;
    }
  }
  h4 {
    width: 50vw;
    text-align: center;
    color: #333d58;
  }
`;
export default StyledJustCard;
