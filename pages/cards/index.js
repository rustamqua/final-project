import React, { Fragment } from "react";
import Nav from "../../components/nav";
import Header from "../../components/header";
import Card from "../../components/card";
import { Container } from "@material-ui/core";
function index() {
  return (
    <>
      <Header></Header>

      <Nav></Nav>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </>
  );
}
export default index;
