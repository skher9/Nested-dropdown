import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div``;

const ButtonContainer = styled.div`
  border: 2px solid lightgrey;
  height: 40px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 5px grey;
`;

const Name = styled.span`
  font-size: larger;
`;

const DropContainer = styled.div`
`;

const DropComponent = ({ Details }) => {
  const [expand, setExpand] = useState(false);

  if(Details.items)
  {
    return (
      <Container>  
        <Wrapper>
          <ButtonContainer onClick={() => setExpand(!expand)}>
            <Name>{Details.name + "  ▾"}</Name>
          </ButtonContainer>
          <DropContainer
            style={{ display: expand ? "block" : "none", paddingLeft: 25 }}
          >
            {Details.items.map((element) => {
              return <DropComponent Details={element}/>   
            })}
          </DropContainer>
        </Wrapper>
      </Container>
    );
  }
  else
  {
    return <ButtonContainer>{Details.name}</ButtonContainer>
  }

  
};

export default DropComponent;
