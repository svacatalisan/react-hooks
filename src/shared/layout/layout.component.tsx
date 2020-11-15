import React from "react";
import styled from "styled-components";
import SideNavBarComponent from '../../components/side-nav-bar/side-nav-bar.component';
import LandingComponent from '../../components/landing/landing.component';
import HeaderComponent from '../../components/header/header.component';

const PageContainer = styled['div']`
  display: flex;
  flex-flow: row;
	height: 100%;
  width: 100%;
`;

export default function Layout() {
  return <div className="main-layout">
    <HeaderComponent />
    <PageContainer>
      <SideNavBarComponent />
      <LandingComponent />
    </PageContainer>
  </div>
}
