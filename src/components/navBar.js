import CartWidget from "./CartWidget" 
import '../App.css';

const navBar = (numeroItems) => {
  
    return(
        <header>
        <h1 id="titulo"><a href="/">TECHNOLOGY STORE</a></h1>
    
        <nav>
          <div>
            <ul className="centerItems">
              <a href="/">
                <li className="itemList">HOME</li>
              </a>
              <a href="/location">
                <li className="itemList">LOCATION</li>
              </a>
              <a href="/contact">
                <li className="itemList">CONTACT</li>
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