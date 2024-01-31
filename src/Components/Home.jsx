import React from "react";
import { useState } from "react";
import DropComponent from "./DropComponent";
import data from "../data/data";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 100px;
  border-bottom: 2px solid lightgrey;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Heading = styled.h1``;

const Home = () => {
  const [Details, setDetails] = useState(data);

  return (
    <Container>
      <Header>
        <Heading>Nested Dropdown...</Heading>
      </Header>
      <DropComponent Details={Details} />
    </Container>
  );
};

export default Home;
