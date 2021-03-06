import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Context from "../../shared/context/context";
import LinkComponent from '../link/link.component';
import SurveyComponent from '../survey/survey.component';
import {AiFillSetting} from 'react-icons/ai'
import {FcIdea} from 'react-icons/fc';
import AddEditSurvey from '../add-edit-survey/add-edit-survey.component';

const Landing = styled['div']`
  display: flex;
  flex-flow: column;
  padding: 60px 40px 40px 40px;
  width: 100%;
  @media only screen and (max-width: 600px) and (min-width: 320px)  {
    padding: 20px;
  }
`;

export default function LandingComponent() {
  const { state, dispatch } = useContext(Context);
  const { firstname } = state.UserState;

  useEffect(() => {
    document.title = `Code challenge`;
  });

  return <Landing>
    <h1>Welcome back, {firstname}</h1>
    <p>Alohomora! You just unlocked the next level of customer hapiness.</p>
    <SurveyComponent>
      <div className="flex-row">
        <FcIdea size="30"/>
        <div className="flex-column margin-left-15">
          <AddEditSurvey />
        </div>
      </div>
    </SurveyComponent>
    <p className="margin-bottom-20">Get started by adding team members in your settings panel.</p>
    <LinkComponent icon={AiFillSetting} link='#' text='Settings'></LinkComponent>
  </Landing>
}
