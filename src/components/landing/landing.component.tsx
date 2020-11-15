import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Context from "../../shared/context/context";
import LinkComponent from '../link/link.component';
import {AiFillSetting} from 'react-icons/ai'

const Landing = styled['div']`
  display: flex;
  flex-flow: column;
  padding: 60px 0 0 40px;
  width: 100%;
`;

export default function LandingComponent() {
  const { state, dispatch } = useContext(Context);
	const { firstname } = state.UserState;
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Code challenge`;
  });
  return <Landing>
    <h1>Welcome back, {firstname}</h1>
    <p>Alohomora! You just unlocked the next level of customer hapiness.</p>
    <p>Get started by adding team members in your settings panel.</p>
    <LinkComponent icon={AiFillSetting} link='#' text='Settings'></LinkComponent>
  </Landing>
}
