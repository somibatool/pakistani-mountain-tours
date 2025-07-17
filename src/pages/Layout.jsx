import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import ChatButton from "../components/ChatButton/chatbtn";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <ChatButton/>
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
