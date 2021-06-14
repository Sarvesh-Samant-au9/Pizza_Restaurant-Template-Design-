import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
  Icon,
  CloseIcon,
} from "./Sidebar";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
};

export default SideBar;
