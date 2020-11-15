import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

const SurveyContainer = styled['div']`
  background: #fff;
  display: flex;
  flex-flow: column;
  margin: 25px 0;
  min-height: 50px;
  padding: 20px;
  width: 75%;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
  -moz-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
`;

export default function SurveyComponent(props) {
  return <SurveyContainer>
     {props.children}
  </SurveyContainer>
}
