// import logo from './images/fondopersonal.svg';
import './personalstyle.css';
import React from "react";
import alex from './images/Alex.jpg';
import fb from './images/fb.png';
import gh from './images/gh.png';
import ind from './images/in.png';

function App() {
  
  return (
    
    <>
    
    <header >
    
      <div class="header">   
        <div>
            <a href="#modalPersonal"><span title="Datos Personales"><img class="fotoPersonal" src={alex} alt="imagen personal"/></span></a>  
        </div>   
         <nav>
            <div >
               <ul class="menu">
                 <li ><a href="">Inicio</a></li>
                 <li ><a href="AdminNivelEscolar.html">Estudios</a></li>
                 <li ><a href="AdminJobs.html">Empleos</a></li>
                 <li ><a href="AdminCrosscutting.html" >Transversales </a></li>
                 <li ><a href="AdminKnowledge.html">Conocimientos</a></li>
                 <li ><a href="AdminProjects.html">Proyectos</a></li> 
                 <li ><a href="#">Comunidad</a></li>
                 <li ><a href="AcercaDe.html">Acerca de...</a></li> 
               </ul>
            </div>
         </nav>
         <div>
          <p class="parrafo-cabecera">Desarrollo WEB | Aplicaciones de Escritorio | Java EE | Back-End Dev. | HTML | CSS | JavaScript | React | Node js | Herramientas Office</p>
         </div>
          <div>  
            <div>
                <a href="https://www.facebook.com/profile.php?id=100008755599666" target="_blank"><span title="Facebook"><img class="fotoReduce" src={fb} alt="facebook"/></span></a>
            </div>
            <div>
                <a href="https://github.com/AlexT-Dev" target="_blank"><span title="Gut Hub"><img class="fotoReduce" src={gh} alt="GitHub"/></span></a>
            </div> 
              <div>
                  <a href="https://www.linkedin.com/in/alejandro-t%C3%A9llez-aguilar-175b02214/" target="_blank"><span title="LinkedIn"><img class="fotoReduce" src={ind} alt="Indeed"/></span></a> 
            </div> 
          </div> 
      </div>
    </header>
   
    <div class="body">
    {/* <!-- Modal para datos de la fotografía ---> */}
     <div class="containerModal" id="modalPersonal">
      <div class="popup">
         
          <div class="text-modal">
              <p class="encPersonales">DATOS PERSONALES</p>
              <hr class="hrModal"/>
              <form>
              <label class="encDato labelModal">Nombre:</label><p class="encDato pModal"> Alejandro Téllez Aguilar</p>
              <label class="encDato labelModal">Domicilio: </label><p class="encDato pModal"> Justo Sierra 221, Colima, Col., México, C. P. 28010</p>
              <label class="encDato labelModal">Teléfono: </label><p class="encDato pModal">+52 312 194 85 62</p>
              <label class="encDato labelModal">R.F.C.: </label><p class="encDato pModal">TEAA701216MB1</p>
              <label class="encDato labelModal">EMail: </label><p class="encDato pModal">atacolmx@hotmail.com, atacolmx@gmail.com</p>
              </form>
              
          </div>
         <div><a href="#" class="btn-closeModal"><span title="Cerrar">✔</span></a></div>
      </div> 
     </div>

    </div>
    <footer class="fontfooter">
        The best page of my life
   </footer>  

    </>
  );
}



   

export default App;
