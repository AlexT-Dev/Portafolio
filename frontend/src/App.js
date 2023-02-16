// import logo from './images/fondopersonal.svg';
import "./personalstyle.css";
import React from "react";
import alex from "./images/Alex.jpg";
import fb from "./images/fb.png";
import gh from "./images/gh.png";
import ind from "./images/in.png";

function App() {
  return (
    <>
      {/* <div class="imgEnc">
        <img src={fondo} alt="enc1920" />
      </div>  */}

      {/* header  */}
      <header id="header">
        <div class="header">
          <div>
            <a href="#modalPersonal">
              <span title="Datos Personales">
                <img class="fotoPersonal" src={alex} alt="imagen personal" />
              </span>
            </a>
          </div>
          <nav>
            <div>
              <ul class="menu">
                {/* <li>
                  <a href="">Inicio</a>
                </li> */}
                <li>
                  <a href="#seccion-estudios">Preparación Profesional</a>
                </li>
                <li>
                  <a href="#seccion-empleos">Experiencia</a>
                </li>
                <li>
                  <a href="#seccion-trans">Transversales </a>
                </li>
                <li>
                  <a href="#seccion-conocimientos">Conocimientos</a>
                </li>
                <li>
                  <a href="#seccion-proyectos">Proyectos</a>
                </li>
                <li>
                  <a href="#seccion-acercade">Acerca de...</a>
                </li>
              </ul>
            </div>
          </nav>
          {/* Para poner en una línea las tecnologías y lonks a otras páginas */}
          <div class="containerCabecera">
            <div>
              <p class="parrafoCabecera">
                Desarrollo WEB | Aplicaciones de Escritorio | Java EE | Back-End
                Dev. | HTML | CSS | JavaScript | React | Node js | Herramientas
                Office
              </p>
            </div>
            <div class="iconosSociales">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100008755599666"
                  target="_blank"
                >
                  <span title="Facebook">
                    <img class="fotoReduce" src={fb} alt="facebook" />
                  </span>
                </a>
              </div>
              <div>
                <a href="https://github.com/AlexT-Dev" target="_blank">
                  <span title="Gut Hub">
                    <img class="fotoReduce" src={gh} alt="GitHub" />
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/alejandro-t%C3%A9llez-aguilar-175b02214/"
                  target="_blank"
                >
                  <span title="LinkedIn">
                    <img class="fotoReduce" src={ind} alt="Indeed" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End header */}
      {/* Body */}
      <body >
       {/* Secciones */}
       <section id="seccion-skills" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
         <h1 class="h1skill" >Tecnologías</h1>
          <p>Visual Basic</p>
          <div class="cskills">
           <div class="skills vb">40%</div>
          </div>
          <p>Cobol</p>
          <div class="cskills">
            <div class="skills cobol">40%</div>
          </div>
          <p>- Java EE Edition</p>
          <div class="cskills">
            <div class="skills java">35%</div>
          </div>
          <p>Node JS</p>
          <div class="cskills">
            <div class="skills njs">30%</div>
          </div>
          <p>CSS</p>
          <div class="cskills">
            <div class="skills css">60%</div>
          </div>
          <p>HTML</p>
          <div class="cskills">
            <div class="skills html">60%</div>
          </div>
          <p>MySql y PostGreSql</p>
          <div class="cskills">
            <div class="skills sql">70%</div>
          </div>
          <p>Microsoft Office (Excel, Word, Power Point, Access, Visio, Project)</p> 
          <div class="cskills">
            <div class="skills ms">70%</div>
          </div>
          <hr class="espacio"></hr>
          <a class="button" href="#header" > Inicio </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg ">
        
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
        <div class="secimg imgestudios">
        
        </div>
       </section>
      {/* Salto de Sección */}
      <div class="saltoSeccion"></div>
      <section id="seccion-empleos" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
         <h1 class="h1" >Experiencia</h1>
          <p>
            Global Gas. Enpresa dedicada a la venta de Gas LP para consumo doméstico. Jefe de TI Zona Colima.
          </p>
          <p>
           Ternium. Se dedica la extracción de Fierro Mineral y su transformación en Acero. Encargado de Desarrollo de Sistemas.
          </p>
          <p>
          
           Más información en archivo adjunto <a class="button" href="/CV_Alejandro_completo.pdf" download="CV ATA.pdf">Curriculum Vitae</a>
          
          </p>
          <hr class="espacio"></hr>
          
          <a class="button" href="#header" > Inicio </a>
          
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgexperiencia">
        
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
        <div class="secimg imgtrans">
        
        </div>
       </section>


      </body>
      {/* End Body */}

      {/* footer */}
      <footer>
        <div class="footer">telefono</div>
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
