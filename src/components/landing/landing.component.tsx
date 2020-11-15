import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Context from "../../shared/context/context";
import LinkComponent from '../link/link.component';
import SurveyComponent from '../survey/survey.component';
import {AiFillSetting} from 'react-icons/ai'
import {FcIdea} from 'react-icons/fc'

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
    <SurveyComponent>
      <div className="flex-row">
        <FcIdea size="30"/>
        <div className="flex-column margin-left-15">
          <span className="margin-bottom-10"><b>Did you know?</b></span>
          <span>In a recent survey, <b>65%</b> of customers said they would prefer to speak with an expert on the phone instead through text or email when making a major purchase or investment.</span>
        </div>
      </div>
    </SurveyComponent>
    <p className="margin-bottom-20">Get started by adding team members in your settings panel.</p>
    <LinkComponent icon={AiFillSetting} link='#' text='Settings'></LinkComponent>
  </Landing>
}
