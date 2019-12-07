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
  const [backgroundURL, setBack] = useState("../../static/GOLD.png");
  const [fcolor, setFcolor] = useState("rgb(70,57,17)");
  const [clubName, setCName] = useState("");
  const backBLACK = () => {
    setBack("../static/BLACK.png");
    setFcolor("rgb(250,250,69)");
  };
  const backBPL_POTM = () => {
    setFcolor("rgb(0,251,254)");
    setBack("../static/BPL_POTM.png");
  };
  const backChampions = () => {
    setFcolor("rgb(222,179,122)");
    setBack("../static/Champions.png");
  };
  const backCL = () => {
    setFcolor("white");
    setBack("../static/CL.png");
  };
  const backFUTMAS = () => {
    setFcolor("white");
    setBack("../static/FUTMAS.png");
  };
  const backGOLD = () => {
    setBack("../static/GOLD.png");
    setFcolor("rgb(70,57,17)");
  };
  const backHeadliner = () => {
    setFcolor("white");
    setBack("../static/Headliner.png");
  };
  const backHERO = () => {
    setFcolor("rgb(249,229,55)");
    setBack("../static/HERO.png");
  };
  const backICON = () => {
    setFcolor("rgb(98,82,29)");
    setBack("../static/ICON.png");
  };
  const backLive = () => {
    setFcolor("rgb(136,243,222)");
    setBack("../static/Live.png");
  };
  const backMOTM = () => {
    setFcolor("white");
    setBack("../static/MOTM.png");
  };
  const backOTW = () => {
    setFcolor("rgb(252,85,98)");
    setBack("../static/OTW.png");
  };
  const backPP = () => {
    setFcolor("rgb(230,230,230)");
    setBack("../static/PP.png");
  };
  const backRB = () => {
    setFcolor("rgb(250,250,69)");
    setBack("../static/RB.png");
  };
  const backSBC = () => {
    setFcolor("rgb(0,252,254)");
    setBack("../static/SBC.png");
  };
  const backTOTS = () => {
    setFcolor("white");
    setBack("../static/TOTS.png");
  };
  const backTOTW = () => {
    setFcolor("rgb(255,226,146)");
    setBack("../static/TOTW.png");
  };
  const backTOTY = () => {
    setFcolor("white");
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
          fcolor={fcolor}
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
