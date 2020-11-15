import React from "react";
import styled from "styled-components";
import NavLinkComponent from '../nav-link/nav-link.component';
import { GrGroup } from 'react-icons/gr';
import { FaHeadset } from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai'

const PageContainer = styled['div']`
  background: rgb(37, 17, 78);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
	height: 100%;
  width: 80px;
`;
const PublicRoutes = styled['div']`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export default function SideNavBarComponent() {
  return <PageContainer>
    <PublicRoutes>
      <NavLinkComponent link="#" icon={GrGroup}/>
      <NavLinkComponent link="#" icon={FaHeadset}/>
    </PublicRoutes>
    <NavLinkComponent link="#" icon={AiFillSetting}/>
  </PageContainer>
}
