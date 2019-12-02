import styled from "styled-components";
const StyledJustCard = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  justify-content: center;
  margin-top: 100px;
  .rating {
    display: inline-block;
    color: white;
    font-size: 40px;
    margin-top: 40px;
    margin-left: 50px;
    margin-bottom: 0px;
  }
  .position {
    display: inline-block;
    color: white;
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
    margin-left: 45px;
    margin-bottom: 0px;
  }
  .name {
    color: white;
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
      color: white;
      margin-left: 50px;
      margin-bottom: 0px;
      margin-top: 5px;
    }
    .char2 {
      color: white;
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
`;
export default StyledJustCard;
