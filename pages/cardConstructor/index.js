import React, { useState } from "react";
import Nav from "../../components/nav";
import Header from "../../components/header";
import styled from "styled-components";
import Preview from "../../public/cardtypes/justCard";
import Footer from "../../components/footer";

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
  const [backgroundURL, setBack] = useState("../../static/CL.png");
  const [clubName, setCName] = useState("");
  const backBLACK = () => {
    setBack("../static/BLACK.png");
  };
  const backBPL_POTM = () => {
    setBack("../static/BPL_POTM.png");
  };
  const backChampions = () => {
    setBack("../static/Champions.png");
  };
  const backCL = () => {
    setBack("../static/CL.png");
  };
  const backFUTMAS = () => {
    setBack("../static/FUTMAS.png");
  };
  const backGOLD = () => {
    setBack("../static/GOLD.png");
  };
  const backHeadliner = () => {
    setBack("../static/Headliner.png");
  };
  const backHERO = () => {
    setBack("../static/HERO.png");
  };
  const backICON = () => {
    setBack("../static/ICON.png");
  };
  const backLive = () => {
    setBack("../static/Live.png");
  };
  const backMOTM = () => {
    setBack("../static/MOTM.png");
  };
  const backOTW = () => {
    setBack("../static/OTW.png");
  };
  const backPP = () => {
    setBack("../static/PP.png");
  };
  const backRB = () => {
    setBack("../static/RB.png");
  };
  const backSBC = () => {
    setBack("../static/SBC.png");
  };
  const backTOTS = () => {
    setBack("../static/TOTS.png");
  };
  const backTOTW = () => {
    setBack("../static/TOTW.png");
  };
  const backTOTY = () => {
    setBack("../static/TOTY.png");
  };
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
          background={backgroundURL}
          backBLACK={backBLACK}
          backBPL_POTM={backBPL_POTM}
          backChampions={backChampions}
          backCL={backCL}
          backFUTMAS={backFUTMAS}
          backGOLD={backGOLD}
          backHeadliner={backHeadliner}
          backHERO={backHERO}
          backICON={backICON}
          backLive={backLive}
          backMOTM={backMOTM}
          backOTW={backOTW}
          backPP={backPP}
          backRB={backRB}
          backSBC={backSBC}
          backTOTS={backTOTS}
          backTOTW={backTOTW}
          backTOTY={backTOTY}
          clubName={setCName}
        ></Preview>
        <Footer></Footer>
      </StyledConstructor>
    </>
  );
};
export default index;
