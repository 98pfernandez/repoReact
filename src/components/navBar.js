const navBar = () => {
    return(
        <header>
        <h1 id="titulo"><a href="./index.html">DESARROLLO DE SOLUCIONES INFORMÁTICAS</a></h1>
    
        <nav>
          <div>
            <ul className="centerItems">
              <a href="./index.html">
                <li className="itemList">HOME</li>
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

            </ul>
          </div>
        </nav>
      </header>
  )
}

export default navBar;