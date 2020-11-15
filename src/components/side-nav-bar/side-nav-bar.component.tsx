import React, { useState } from "react";
import styled from "styled-components";
import NavLinkComponent from '../nav-link/nav-link.component';
import { GrGroup } from 'react-icons/gr';
import { FaHeadset } from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

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
  .close-nav {
    display: none;
  }
  @media only screen and (max-width: 600px) and (min-width: 320px)  {
    position: absolute;
    background: ${props => props.theme.mobileBackgroundMenu};
    left: 0;
    top: 0;
    width: 80%;
    .close-nav {
      display: flex;
    }
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
  .close-nav {
    position: absolute;
    right: 10px;
    top: 20px;
  }
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
        <AiOutlineClose className="close-nav" size="20px" fill="#000" onClick={() => setExpanded(false)}/>
        <NavLinkComponent link="#" text="Audience" icon={FaHeadset}/>
        <NavLinkComponent link="#" text="Agent Tool" icon={FaHeadset}/>
      </Routes>
      <Routes className='routes'>
        <NavLinkComponent link="#" text="Settings" icon={AiFillSetting}/>
      </Routes>
    </SideNav>
  )
}
