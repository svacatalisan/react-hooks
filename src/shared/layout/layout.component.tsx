import React from "react";
import SideNavBarComponent from '../../components/side-nav-bar/side-nav-bar.component';
import LandingComponent from '../../components/landing-component/landing.component';
import HeaderComponent from '../../components/header/header.component';
export default function Layout() {
  return <div>
    <HeaderComponent />
    <SideNavBarComponent />
    <LandingComponent />
  </div>
}
