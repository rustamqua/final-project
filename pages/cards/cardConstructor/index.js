import React, { useState } from "react";
import Nav from "../../../components/nav";
import Header from "../../../components/header";
import styled from "styled-components";
import Preview from "../../../public/cardtypes/justCard";

const StyledConstructor = styled.div``;

const index = () => {
  const [rating, setRating] = useState("92");
  const [pac, setPac] = useState("99");
  const [dri, setDri] = useState("99");
  const [sho, setSho] = useState("99");
  const [def, setDef] = useState("99");
  const [pas, setPas] = useState("99");
  const [phy, setPhy] = useState("99");
  const [pos, setPos] = useState("CAM");
  const [flag, setFlag] = useState("kz");
  const [name, setName] = useState("ZIDANE");
  const setR = e => {
    setRating(e.target.value);
  };
  const posOnchange = e => {
    setPos(e.target.value.toUpperCase());
  };
  const flagOnchange = (e, values) => {
    if (values !== null) {
      setFlag(values.code.toLowerCase());
    }
  };
  const nameOnchange = e => {
    setName(e.target.value.toUpperCase());
  };
  const pacOnchange = e => {
    setPac(e.target.value.toUpperCase());
  };
  const driOnchange = e => {
    setDri(e.target.value.toUpperCase());
  };
  const shoOnchange = e => {
    setSho(e.target.value.toUpperCase());
  };
  const defOnchange = e => {
    setDef(e.target.value.toUpperCase());
  };
  const pasOnchange = e => {
    setPas(e.target.value.toUpperCase());
  };
  const phyOnchange = e => {
    setPhy(e.target.value.toUpperCase());
  };
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <StyledConstructor>
        <Preview
          rating={rating}
          pac={pac}
          dri={dri}
          sho={sho}
          def={def}
          pas={pas}
          phy={phy}
          pos={pos}
          name={name}
          setRating={setR}
          flagchange={flagOnchange}
          country={flag}
          positionChange={posOnchange}
          changename={nameOnchange}
          changepac={pacOnchange}
          changedri={driOnchange}
          changesho={shoOnchange}
          changedef={defOnchange}
          changepas={pasOnchange}
          changephy={phyOnchange}
        ></Preview>
      </StyledConstructor>
    </>
  );
};
export default index;
