import React from 'react';

import fb from "../images/fb.png";
import gh from "../images/gh.png";
import ind from "../images/in.png";
import "../personalstyle.css";

export default function Footer(){
    return (
        <div class="footer">
        <div class="divfooter"> {/* Para Datos de la página*/}
          <p class="parrafopie">Ver. 2.1.2</p>
          <p class="parrafopie">Ult. Act. 21/Feb/2023</p>
        </div>
        <div class="headerdivicons divfooter"> {/* Para iconos */}
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
        <div class="divfooter"> {/* Para Datos de tecnología */}
          <p class="parrafopie">Creado con: React 18.2</p>
          <p class="parrafopie">CSS: Alejandro Téllez A.</p>
        </div>
      </div>
    )
}