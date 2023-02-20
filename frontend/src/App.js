// import logo from './images/fondopersonal.svg';
import "./personalstyle.css";
import React from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* <div class="imgEnc">
        <img src={fondo} alt="enc1920" />
      </div>  */}

      {/* header  */}
      <header id="header" >
      <Header/>
      </header>  
      {/* End header */}
      {/* Body */}
      <body >
       {/* Secciones */}
       <section id="seccion-skills" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
         <h1 class="h1skill" >Tecnologías</h1>
         <div class="divskill">
           <div class="columnaskill">
             <p>Visual Basic</p>
           </div> 
           <div class="cskills  ">
             <div class="skills vb ">40%</div>
           </div>
          </div>  

          <div class="divskill">
           <div class="columnaskill">
             <p>Cobol</p>
           </div> 
           <div class="cskills ">
             <div class="skills cobol ">30%</div>
           </div>
          </div> 


          <div class="divskill">
           <div class="columnaskill">
             <p>Java EE Edition</p>
           </div> 
           <div class="cskills ">
             <div class="skills java ">30%</div>
           </div>
          </div> 


          <div class="divskill">
           <div class="columnaskill">
             <p>Node JS</p>
           </div> 
           <div class="cskills ">
             <div class="skills njs ">30%</div>
           </div>
          </div> 


          <div class="divskill">
           <div class="columnaskill">
             <p>CSS</p>
           </div> 
           <div class="cskills ">
             <div class="skills css ">50%</div>
           </div>
          </div>
          
         
          <div class="divskill">
           <div class="columnaskill">
             <p>HTML</p>
           </div> 
           <div class="cskills ">
             <div class="skills html ">60%</div>
           </div>
          </div>

          <div class="divskill">
           <div class="columnaskill">
             <p>MySql y PostGreSql</p>
           </div> 
           <div class="cskills ">
             <div class="skills sql ">70%</div>
           </div>
          </div>
          
          <div class="divskill">
           <div class="columnaskill">
             <p>Microsoft Office</p>
           </div> 
           <div class="cskills ">
             <div class="skills ms ">70%</div>
           </div>
          </div>
          
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg ">
        <h1 class="h1skill">Conocimientos</h1>
        <div class="divskill">
           <div class="columnaskill">
             <p>UML</p>
           </div> 
           <div class="cskills  ">
             <div class="skills vb ">40%</div>
           </div>
          </div>  

          <div class="divskill">
           <div class="columnaskill">
             <p>Visio</p>
           </div> 
           <div class="cskills ">
             <div class="skills visio ">70%</div>
           </div>
          </div> 


          <div class="divskill">
           <div class="columnaskill">
             <p>MS Project</p>
           </div> 
           <div class="cskills ">
             <div class="skills project ">55%</div>
           </div>
          </div> 

          <div class="divskill">
           <div class="columnaskill">
             <p>MS Access</p>
           </div> 
           <div class="cskills ">
             <div class="skills visio ">70%</div>
           </div>
          </div> 
         
          <div class="divskill">
           <div class="columnaskill">
             <p>MS VBA</p>
           </div> 
           <div class="cskills ">
             <div class="skills vba ">50%</div>
           </div>
          </div>
        </div>
       </section>
      {/* Salto de Sección */}
      <div class="saltoSeccion"></div>
       <section id="seccion-estudios" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
         <h1 class="h1" >Preparación profesional</h1>
          <p >
           Mis estudios en la programación iniciaron a los 17 años en una escuela rudimentaria que contaba con lo escencial, teclados Commodore 16 con 16 KB de memoria y lenguaje Basic.
          </p>
          <p>
           Continué mi formación profesional en la Universidad Autónoma del Pacífico, de 1991 a 1995, Titulado como Lic. en Sistemas Computacionales.
          </p>
          <p>
           El perfil académico es de tipo administrativo con la capacidad de comprender y apoyar a la parte técnica como hardware de uso o propósito general.
          </p>
          <p>
           Tome una especialización sobre desarrollo WEB en Soy Henry, escuela en línea para sertificación como Full-Stack Dev. <a href="https://www.soyhenry.com/" target="_blank">Soy Henry</a>
          </p>
          
          <hr class="espacio"></hr>
          <a class="button" href="#header" > Inicio </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgestudios">
        
        </div>
       </section>
      {/* Salto de Sección */}
      <div class="saltoSeccion"></div>
      <section id="seccion-empleos" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
         <h1 class="h1" >Experiencia</h1>
          <p>
            Global Gas. Empresa que realiza la venta de Gas LP para consumo doméstico. Jefe de TI Zona Colima.
          </p>
          <p>
           Ternium. Se dedica la extracción de Fierro Mineral y su transformación en Acero. Encargado de Desarrollo de Sistemas.
          </p>
          <hr class="espacio"></hr>
          <p>
          
           Más información en archivo adjunto. <a class="button" href="/CV_Alejandro_completo.pdf" download="CV ATA.pdf">Curriculum Vitae</a>
          
          </p>
          <hr class="espacio"></hr>
          
          <a class="button" href="#header" > Inicio </a>
          
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgexperiencia">
        
        </div>
      </section>
      
       <div class="saltoSeccion"></div>
       <section id="seccion-trans" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
         <h1 class="h1" >Competencias Transversales</h1>
          <p>- Proactividad.</p>
          <p>- Aprendizaje activo.</p>
          <p>- Resolución de problemas y conflictos.</p>
          <p>- Creatividad y Capacidad de Análisis.</p>
          <p>- Trabajo en equipo.</p>
          <hr class="espacio"></hr>
          <a class="button" href="#header" > Inicio </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgtrans">
        
        </div>
       </section>

       <div class="saltoSeccion"></div>
       <section id="seccion-pro" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
         <h1 class="h1" >Proyectos</h1>
          <p>- PI-Countries (Henry).</p>
          <p>- PF-Mate. (Proyecto final en Grupo Henry)</p>
          <p>- DEGO Sistema tipo Uber (43 Personas de todo el País).</p>
          <p>- Historia Clínica (Java EE y MySql).</p>
          
          <hr class="espacio"></hr>
          <a class="button" href="#header" > Inicio </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgpro">
        
        </div>
       </section>


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
                {" "}
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
            <a href="#" class="btncloseModal">
              <span title="Cerrar">✔</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
