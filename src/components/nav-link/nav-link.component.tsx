import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

const NavLink = styled['a']`
  display: flex;
  flex-flow: row;
  padding: 20px 0;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  svg {
    padding: 0 20px;
    path {
      fill: ${props => props.theme.navLinkText};
      stroke: ${props => props.theme.navLinkText};
    }
  }
  &:hover  {
    background: ${props => props.theme.navBarLinkHovered};
  }
`;

const LinkText = styled['label']`
  color: ${props => props.theme.navLinkText};
  font-size: 18px;
  padding-left: 15px;
`;

interface INavLink {
  link: string;
  icon: IconType;
  text: string;
}

export default function NavLinkComponent(props: INavLink) {
  return <NavLink href={props.link}>
     <props.icon size="20px" fill="#fff"/>
    <LinkText>{props.text}</LinkText>
  </NavLink>
}
