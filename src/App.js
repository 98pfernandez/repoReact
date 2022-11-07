import './components/navBar'
import navBar from './components/navBar';
import logoReact from './logo.svg'

const ItemListContainer = (comment) => {
  return (
    <div className='firstComment'>
      <h1 className='comment'>
        {comment}
      </h1>

      <img id='logoReact' src={logoReact}></img>
    </div>
  )
}


function App() {
  return (
    <body>
      {navBar('24')}

      {ItemListContainer('Primera entrega React!')}
    </body>
  );
}

export default App;
