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
    .product {
      display: flex;
      margin: 20px;
      div {
        display: flex;
        flex-direction: column;
        margin: 20px;
        img {
          width: 200px;
          object-fit: cover;
        }
        button {
          max-width: 200px;
        }
      }
      @media (max-width: 500px) {
        flex-direction: column;
      }
    }
  }
`;
export default StyledCatalog;
