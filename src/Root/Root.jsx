import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import TopScroll from "../Components/Common/TopScroll";
import ScrollToTopButton from "../Components/Common/ScrollToTopButton";

const Root = () => {
  return (
    <>
      <TopScroll />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Root;
