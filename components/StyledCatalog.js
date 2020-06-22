import styled from "styled-components";
const StyledCatalog = styled.div`
  margin-top: 60px;
  .section {
    height: 25vh;
    background: rgb(255, 90, 103);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    h2 {
      color: white;
    }
    h3 {
      text-align: center;
      color: white;
    }
  }
  .productWrapper { 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .product {
      &:hover{
        transform: scale(1.1);
      }
      transition: all .2s ease-in-out;
      display: flex;
      flex-direction: column;
      width: 250px;
      @media (max-width: 700px) {
        margin-bottom: 40px;
    }
    }
    .imgContainer{
      margin: auto;
      img{
        width: 250px;
      }
    }
    p{
      text-align: center;
    }
    .price{
      color: rgb(255, 90, 103);
      font-weight: 1000;
      font-size: 24px;
    }
    .productDescr{
      margin: 10px;
    }
  }
`;
export default StyledCatalog;
