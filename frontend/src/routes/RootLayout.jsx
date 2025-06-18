import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
const RootLayout = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    function openModalHandler() {
        setIsModalOpen(true);
    }
  
    return (
    <>
      <MainHeader onCreatePost={openModalHandler}/>
      <Outlet />
    </>
  );
}

export default RootLayout;