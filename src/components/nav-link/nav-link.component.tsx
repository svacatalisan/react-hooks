import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

const NavLink = styled['a']`
  display: flex;
  flex-flow: row;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  svg path {
    fill: ${props => props.theme.navLinkText};
  }
  &:hover  {
    background: ${props => props.theme.navBarLinkHovered};
  }
`;

interface INavLink {
  link: string;
  icon: IconType;
}

export default function NavLinkComponent(props: INavLink) {
  return <NavLink href={props.link}>
     <props.icon size="30px" fill="#fff"/>
  </NavLink>
}
