import React from 'react';
import alex from "../images/Alex.jpg";
import fb from "../images/fb.png";
import gh from "../images/gh.png";
import ind from "../images/in.png";
import "../personalstyle.css";
import {HashLink} from "react-router-hash-link"

export default function Header(){
    return (
    <div class="header ">
    <div> {/*Para imagen */}
      <a href="#modalPersonal">
        <span title="Datos Personales">
          <img class="fotoPersonal" src={alex} alt="imagen personal" />
        </span>
      </a>
    </div>
    <div> {/* Para Nombre y Tecnologías */}
      <div class="headerdivname">
        <p class="headerp">Hola, Soy Alejandro Téllez Aguilar,</p>
        <p class="headerp">web developer</p>
        <h4 class="headerh4">Back End Dev</h4>
      </div>
      <div>
      <p class="parrafoCabecera headerdivname">
        WEb Develop| Aplicaciones de Escritorio | Java EE | 
        HTML | CSS | JavaScript | React | Node js | Office
      </p>
      </div>
    </div>
    <div class="headerdivmenu">
      <nav>
        
          <ul class="menu">
            <li>  <HashLink to="/#seccion-estudios">Preparación Profesional</HashLink>  </li>
            <li>  <HashLink to="/#seccion-empleos">Experiencia</HashLink> </li>
            <li>  <HashLink to="/#seccion-trans">Transversales </HashLink> </li>
            <li>  <HashLink to="/#seccion-pro">Proyectos</HashLink> </li>
          </ul>
       
      </nav>
    </div>
    
    {/* Para links a otras páginas */}
    <div class="headerdivicons">
      
     
        <div>
          <a href="https://www.facebook.com/profile.php?id=100008755599666" target="_blank" rel="noreferrer" >
            <span title="Facebook">  <img class="fotoReduce" src={fb} alt="facebook" />  </span>
          </a>
        </div>
        <div>
          <a href="https://github.com/AlexT-Dev" target="_blank" rel="noreferrer">
            <span title="Gut Hub">  <img class="fotoReduce" src={gh} alt="GitHub" />  </span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/alejandro-t%C3%A9llez-aguilar-175b02214/"
            target="_blank" rel="noreferrer">
            <span title="LinkedIn">  <img class="fotoReduce" src={ind} alt="Indeed" />  </span>
          </a>
        </div>
      
    </div>
   </div>

    )
};

