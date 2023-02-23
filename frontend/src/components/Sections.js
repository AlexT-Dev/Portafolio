import React from 'react'
import "../personalstyle.css";

export default function Sections() {
  return (
    <body>
      <section id="seccion-skills" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
          <h1 class="h1skill">Tecnologías</h1>
          <div class="divskill">
            <div class="columnaskill">
              <p>Visual Basic</p>
            </div>
            <div class="cskills  ">
              <div class="skills vb ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>Cobol</p>
            </div>
            <div class="cskills ">
              <div class="skills cobol ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>Java EE Edition</p>
            </div>
            <div class="cskills ">
              <div class="skills java ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>Node JS</p>
            </div>
            <div class="cskills ">
              <div class="skills njs ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>CSS</p>
            </div>
            <div class="cskills ">
              <div class="skills css ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>HTML</p>
            </div>
            <div class="cskills ">
              <div class="skills html ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>MySql y PGSql</p>
            </div>
            <div class="cskills ">
              <div class="skills sql ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>MS Office</p>
            </div>
            <div class="cskills ">
              <div class="skills ms ">✔</div>
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
              <div class="skills vb ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>Visio</p>
            </div>
            <div class="cskills ">
              <div class="skills visio ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>MS Project</p>
            </div>
            <div class="cskills ">
              <div class="skills project ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>MS Access</p>
            </div>
            <div class="cskills ">
              <div class="skills visio ">✔</div>
            </div>
          </div>

          <div class="divskill">
            <div class="columnaskill">
              <p>MS VBA</p>
            </div>
            <div class="cskills ">
              <div class="skills vba ">✔</div>
            </div>
          </div>
        </div>
      </section>
      {/* Salto de Sección */}
      <div class="saltoSeccion"></div>
      <section id="seccion-estudios" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
          <h1 class="h1">Preparación profesional</h1>
          <p>
            Mis estudios en la programación iniciaron a los 17 años en una
            escuela rudimentaria que contaba con lo esencial, teclados
            Commodore 16 con 16 KB de memoria y lenguaje Basic.
          </p>
          <p>
            Continué mi formación profesional en la Universidad Autónoma del
            Pacífico, de 1991 a 1995, Titulado como Lic. en Sistemas
            Computacionales.
          </p>
          <p>
            El perfil académico es de tipo administrativo con la capacidad de
            comprender y apoyar a la parte técnica como hardware de uso o
            propósito general.
          </p>
          <p>
            Tome una especialización sobre desarrollo WEB en Soy Henry, escuela
            en línea para Certificación como Full-Stack Dev.{" "}
            <a href="https://www.soyhenry.com/" target="_blank" rel="noreferrer">
              Soy Henry
            </a>
          </p>

          <hr class="espacio"></hr>
          <a class="button" href="#header">
            {" "}
            Inicio{" "}
          </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgestudios"></div>
      </section>
      {/* Salto de Sección */}
      <div class="saltoSeccion"></div>
      <section id="seccion-empleos" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
          <h1 class="h1">Experiencia</h1>
          <p>
            Global Gas. Empresa que realiza la venta de Gas LP para consumo
            doméstico. Jefe de TI Zona Colima.
          </p>
          <p>
            Ternium. Se dedica la extracción de Fierro Mineral y su
            transformación en Acero. Encargado de Desarrollo de Sistemas.
          </p>
          <hr class="espacio"></hr>
          <p>
            Más información en archivo adjunto.
           </p>
            <hr class="espacio"></hr>
           
            <a
              class="button"
              href="/CV_Alejandro_completo.pdf"
              download="CV ATA.pdf"
            >
              Curriculum Vitae
            </a>
         
          <hr class="espacio"></hr>

          <a class="button" href="#header">
            {" "}
            Inicio{" "}
          </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgexperiencia"></div>
      </section>

      <div class="saltoSeccion"></div>
      <section id="seccion-trans" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
          <h1 class="h1">Competencias Transversales</h1>
          <p>- Proactividad.</p>
          <p>- Aprendizaje activo.</p>
          <p>- Resolución de problemas y conflictos.</p>
          <p>- Creatividad y Capacidad de Análisis.</p>
          <p>- Trabajo en equipo.</p>
          <hr class="espacio"></hr>
          <a class="button" href="#header">
            {" "}
            Inicio{" "}
          </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgtrans"></div>
      </section>

      <div class="saltoSeccion"></div>
      <section id="seccion-pro" class="sec">
        {/* Sección izquierda para texto */}
        <div class="izquierda">
          <h1 class="h1">Proyectos</h1>
          <p>- PI-Countries (Henry).</p>
          <p>- PF-Mate. (Proyecto final en Grupo Henry)</p>
          <p>- DEGO Sistema tipo Uber (43 Personas de todo el País).</p>
          <p>- Historia Clínica (Java EE y MySql).</p>

          <hr class="espacio"></hr>
          <a class="button" href="#header">
            {" "}
            Inicio{" "}
          </a>
        </div>
        {/* Sección derecha para imagen */}
        <div class="secimg imgsize imgpro"></div>
      </section>
    </body>
  );
}


 

