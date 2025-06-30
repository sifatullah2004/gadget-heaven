import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { CostsContext } from "../context/CostsContext";
import { useState } from "react";

const MainLayout = () => {
  const navigation = useNavigation();
  const [cost, setCost] = useState(0);
   

  const handleCost = (price) => {
    setCost(cost + price);
    
  };

  return (
    <CostsContext.Provider value={{handleCost, cost, setCost }}>
      <div className="bg-base-300">
        <Navbar></Navbar>

        <Toaster />
        <div className="min-h-[calc(100vh-285px)]">
          {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
        </div>

        <Footer></Footer>
      </div>
    </CostsContext.Provider>
  );
};

export default MainLayout;
