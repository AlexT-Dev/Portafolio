// import logo from './images/fondopersonal.svg';
import "./personalstyle.css";
import React from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Sections from "./components/Sections"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>   
      {/* Sin el BrowserRouter no funcionan el link y hashlink */}

      {/* header  */}
      <header id="header" >
      <Header/>
      </header>  
      {/* End header */}
      {/* Body */}
      <body >
       {/* Secciones */}
       <Sections/>


      </body>
      {/* End Body */}

      {/* footer */}
      <footer>
        <Footer/>
      </footer>
      {/* end footer */}

      {/* <!-- Modal para datos de la fotografía ---> */}
      <div class="containerModal" id="modalPersonal">
        <div class="popup">
          <div class="imagen"></div>
          <div class="textModal">
            <p class="encPersonales">DATOS PERSONALES</p>
            <hr class="hrModal"></hr>
            <form>
              <label class="encDato labelModal">Nombre:</label>
              <p class="encDato pModal"> Alejandro Téllez Aguilar</p>
              <label class="encDato labelModal">Domicilio: </label>
              <p class="encDato pModal">
                
                Justo Sierra 221, Colima, Col., México, C. P. 28010
              </p>
              <label class="encDato labelModal">Teléfono: </label>
              <p class="encDato pModal">+52 312 194 85 62</p>
              <label class="encDato labelModal">R.F.C.: </label>
              <p class="encDato pModal">TEAA701216MB1</p>
              <label class="encDato labelModal">EMail: </label>
              <p class="encDato pModal">
                atacolmx@hotmail.com, atacolmx@gmail.com
              </p>
            </form>
          </div>
          <div>
            <a href="#" class="btncloseModal" rel="noreferrer">
              <span title="Cerrar">✔</span>
            </a>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
