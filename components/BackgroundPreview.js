import React from "react";
import styled from "styled-components";
import { useState } from "react";
const StyledBack = styled.div`
  margin: 0px;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-top: 5px;
  }
`;
const BackgroundPreview = props => {
  const [src, setSrc] = useState(props.image);
  return (
    <StyledBack>
      <div onClick={props.chooseBack}>
        <img src={props.image}></img>
      </div>
    </StyledBack>
  );
};
export default BackgroundPreview;
