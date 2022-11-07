import CartWidget from "./CartWidget" 
import '../App.css';

const navBar = (numeroItems) => {
    return(
        <header>
        <h1 id="titulo"><a href="./index.html">DESARROLLO DE SOLUCIONES INFORMÁTICAS</a></h1>
    
        <nav>
          <div>
            <ul className="centerItems">
              <a href="./index.html">
                <li className="itemList">INICIO</li>
              </a>
              <a href="./pages/projects.html">
                <li className="itemList">CATÁLOGO</li>
              </a>
              <a href="./pages/location.html">
                <li className="itemList">UBICACIÓN</li>
              </a>
              <a href="./pages/form.html">
                <li className="itemList">FORMULARIO DE CONTACTO</li>
              </a>

              <li>
              {CartWidget(numeroItems)}
             </li>

            </ul>
          </div>
        </nav>
      </header>
  )
}

export default navBar;