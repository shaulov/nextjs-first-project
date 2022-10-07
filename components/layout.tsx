import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
}

function Layout ({ children }: LayoutProps) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;