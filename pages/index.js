import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import ForLogo from "../components/forlogo";
import Footer from "../components/footer";
const Home = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Nav></Nav>
      <ForLogo></ForLogo>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Home;
