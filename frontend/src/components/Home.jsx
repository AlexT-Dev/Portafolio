import React  from "react";
import style  from "../personalstyle.css"
import Header from "../components/Header.jsx";
import Body   from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";


/* 
          Author: Alejandro Téllez Aguilar
            Date: Februry 12, 2023
     Description: Crea la página principal del portafolio
     */

function Home() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.main}>
        <div className={style.min}>
          <Body />
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;