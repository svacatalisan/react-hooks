import React, { useState } from "react";
import styled from "styled-components";
import NavLinkComponent from '../nav-link/nav-link.component';
import { GrGroup } from 'react-icons/gr';
import { FaHeadset } from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';

const SideNav = styled['div']`
  background: ${props => props.theme.navBarLink};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
	height: 100%;
  width: 300px;
  overflow: hidden;
  &.hidden {
    width: 70px;
  }
  .hamburger-menu {
    display: none;
  }
  @media only screen and (max-width: 600px) and (min-width: 320px)  {
    position: absolute;
    background: ${props => props.theme.mobileBackgroundMenu};
    left: 0;
    top: 0;
    width: 80%;
    &.hidden {
      left: 10px;
      top: 7px;
      background: white;
      width: 30px;
      height: 30px;
      .hamburger-menu {
          display: flex;
          fill: black;
          stroke: black;
      }
      .routes {
        display: none;
      }
    }
  }
`;
const Routes = styled['div']`
  display: flex;
  flex-flow: column;
  width: 1000px;
`;

export default function SideNavBarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <SideNav
      onMouseEnter={() => setExpanded(true)} 
      onMouseLeave={() => setExpanded(false)}
      className={`${expanded ? "" : "hidden"}`}
    >
      <GiHamburgerMenu className="hamburger-menu" size="30px" fill="#fff"/>
      <Routes className='routes'>
        <NavLinkComponent link="#" text="Circle Bank" icon={GrGroup}/>
        <NavLinkComponent link="#" text="Audience" icon={FaHeadset}/>
        <NavLinkComponent link="#" text="Agent Tool" icon={FaHeadset}/>
      </Routes>
      <Routes className='routes'>
        <NavLinkComponent link="#" text="Settings" icon={AiFillSetting}/>
      </Routes>
    </SideNav>
  )
}
