import React, { useEffect } from "react";
import NavBar from "../../../components/NavBar";
import "./style.scss"
import { useNavigate } from "react-router-dom";

function MainLayout({ children }: { children: React.ReactNode }) {

  let isAuthen = localStorage.getItem("ACCESS_TOKEN_KEY");
  const navigater = useNavigate ()

  useEffect(()=>{
    console.log("isAuthen:",isAuthen);
    
      if(!isAuthen) {
        navigater("login");
      }
  },[isAuthen])

  return (
    <div className="main-layout">
      <NavBar />
      <div style={{ display: "flex" }}>
        <div className="fake-layout"></div>
        <div className="content" style={{flex:1  }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
