import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
// import Button from "../../UI/Button/Button";
// <Button clicked={props.open}>MENU</Button>
const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.toggle} />
    <Logo />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
