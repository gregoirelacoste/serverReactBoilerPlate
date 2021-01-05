import MainNav from "../components/MainNav";
import React, { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <MainNav />
      {children}
    </div>
  );
};

export default Layout;
