import React, { useState } from "react";
import styled from "styled-components";
import NavLinkComponent from '../nav-link/nav-link.component';
import { GrGroup } from 'react-icons/gr';
import { FaHeadset } from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai'

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
      <Routes>
        <NavLinkComponent link="#" text="Circle Bank" icon={GrGroup}/>
        <NavLinkComponent link="#" text="Audience" icon={FaHeadset}/>
        <NavLinkComponent link="#" text="Agent Tool" icon={FaHeadset}/>
      </Routes>
      <Routes>
        <NavLinkComponent link="#" text="Settings" icon={AiFillSetting}/>
      </Routes>
    </SideNav>
  )
}
