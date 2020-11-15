import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

const Link = styled['a']`
  background: ${props => props.theme.navBarLink};
  border-radius: 20px;
  display: flex;
  flex-flow: row;
  padding: 0 0;
  align-items: center;
  justify-content: center;
  margin-right:auto;
  padding: 10px 20px;
  svg path {
    fill: ${props => props.theme.navLinkText};
    stroke: ${props => props.theme.navLinkText};
  }
  &:hover  {
    background: ${props => props.theme.navBarLinkHovered};
  }
`;

const LinkText = styled['label']`
  color: ${props => props.theme.navLinkText};
  font-size: 20px;
  padding-left: 15px;
`;

interface ILink {
  link: string;
  icon: IconType;
  text: string
}

export default function LinkComponent(props: ILink) {
  return <Link href={props.link}>
     <props.icon size="20px" fill="#fff"/>
     <LinkText>{props.text}</LinkText>
  </Link>
}
