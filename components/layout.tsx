import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: JSX.Element;
}

function Layout ({ children }: LayoutProps) {
  console.log(children);
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

export default Layout;