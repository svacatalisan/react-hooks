import React from "react";
import styled from "styled-components";
import UserInitials from "../../shared/user-preferences/user-preferences.component";
import Switch from '../switch/switch.component';

const Container = styled['div']`
  background: ${props => props.theme.headerBackground};
  display: flex;
  flex-flow: row;
	height: 50px;
	position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ECEBF2;
  @media only screen and (max-width: 600px) and (min-width: 320px)  {
    justify-content: flex-end;
  }
`;

export default function HeaderComponent() {
  return <Container>
    <Switch></Switch>
    <UserInitials />
  </Container>
}
