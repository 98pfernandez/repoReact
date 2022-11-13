
import '../../../App.css'

function Location() {
  
  return (
    <main className='location'>
    <h2 className='locationTitle'>Estamos ubicados en:</h2>
    <iframe className='locationMap' style={{filter: "invert(90%)", border:"0"}}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.7455903641826!2d-55.975930511876655!3d-34.831535998769056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89a320b805a70ae9!2zMzTCsDQ5JzUzLjUiUyA1NcKwNTgnMzEuNCJX!5e0!3m2!1ses!2suy!4v1659613502545!5m2!1ses!2suy"
      width="100%" height="450" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
     </main>
  );
}

export default Location;

