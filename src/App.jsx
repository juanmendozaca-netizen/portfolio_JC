import "./App.css";
import foto from "./assets/foto_cv_oficial_BN.png";

function App() {
  return (

    <div className="container">
      <div className="card">

        {/* FOTO */}
        <img src={foto} alt="foto" className="foto" />

        {/* HEADER */}
        <h1>Juan Carlos Mendoza</h1>
        <h3>Software Design and Development Student</h3>

        {/* SOBRE MI */}
        <p>
          I'm Software Design and Development student at TECSUP, passionate about 
          building modern web applications. I have experience developing academic 
          projects using React, JavaScript, HTML and CSS, focusing on user-friendly 
          interfaces and efficient solutions.
        </p>

        {/* SKILLS */}
        <h2>Technical Skills</h2>
        <ul className="skills">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>Git & GitHub</li>
          <li>Figma</li>
        </ul>

        {/* PROYECTOS */}
        <h2>Projects</h2>

        <div className="project">
          <h4>Learning Cave</h4>
          <p>
            Educational web platform to manage classes, students and quizzes 
            with AI support.
          </p>
        </div>

        <div className="project">
          <h4>E-commerce Jewelry</h4>
          <p>
            Online store with shopping cart, product filters and inventory control.
          </p>
        </div>

        {/* EDUCACION */}
        <h2>Education</h2>
        <p>
          TECSUP - Software Design and Development (5th cycle)
        </p>

        {/* CONTACTO */}
        <h2>Contact</h2>
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