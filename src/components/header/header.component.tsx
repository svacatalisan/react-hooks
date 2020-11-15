import React from "react";
import styled from "styled-components";
import UserInitials from "../../shared/user-preferences/user-preferences.component";

const Container = styled['div']`
  background: ${props => props.theme.headerBackground};
  display: flex;
  flex-flow: row-reverse;
	height: 50px;
	position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ECEBF2;
`;

export default function HeaderComponent() {
  return <Container>
    <UserInitials />
  </Container>
}
