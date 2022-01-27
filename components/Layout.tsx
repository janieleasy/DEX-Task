import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;