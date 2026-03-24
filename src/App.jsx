import "./App.css";
import foto from "./assets/foto_cv_oficial.png";

function App() {
  return (

    <div className="container">
      <div className="card">

        {/* FOTO */}
        <img src={foto} alt="foto" className="foto" />

        {/* HEADER */}
        <h1>Juan Carlos Mendoza Calderon</h1>
        <h3>Estudiante de Diseño y Desarrollo de Software</h3>

        {/* SOBRE MI */}
        <p>
          Soy estudiante de Diseño y Desarrollo de Software en TECSUP, apasionado por la creación de aplicaciones web modernas. Tengo experiencia desarrollando proyectos académicos utilizando React, JavaScript, HTML y CSS, enfocándome en crear interfaces fáciles de usar y soluciones eficientes.
        </p>

        {/* SKILLS */}
        <h2>Habilidades Técnicas</h2>
        <ul className="skills">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Git & GitHub</li>
          <li>Figma</li>
        </ul>

        {/* PROYECTOS */}
        <h2>Proyectos</h2>

        <div className="project">
          <h4>Learning Cave</h4>
          <p>
            Plataforma web educativa para gestionar clases, estudiantes y cuestionarios con apoyo de inteligencia artificial.
          </p>
        </div>

        <div className="project">
          <h4>E-commerce de Joyería</h4>
          <p>
            Tienda en línea con carrito de compras, filtros de productos y control de inventario.

          </p>
        </div>

        {/* EDUCACION */}
        <h2>Educación</h2>
        <p>
          TECSUP - Diseño y Desarrollo de Software (2024 - actualmente)
        </p>

        {/* CONTACTO */}
        <h2>Contacto</h2>
        <p>Email: juanmendozacalderon17@gmail.com</p>

        <div className="links">
          <a href="https://github.com/juanmendozaca-netizen" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/juancarlos-mendozacalderon11" target="_blank">
            LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;