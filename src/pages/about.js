import mario from '../assets/chefs-mario-and-adrian_a.jpg';
import adrian from '../assets/chefs-mario-and-adrian_b.jpg';
import "./about.css";
import "../pages/form.css"
function about(){
    return(
      <div className='container'>
        <div className='container2'>
         <div className='section'>
            <h1>Little Lemmone</h1>
            <h2>Chicago</h2>
            <p> We are a family owned Mediterranean restaurant,<br></br> 
            focused on traditional recipes served with a modern twist.
            </p>
            <button>Reservation table</button>
           </div>
          <div className='photos'>
            <img className='mario' src={mario}></img>
            <img className='adrian' src={adrian}></img>
          </div>
         </div>
         </div>
    )
}
export default about;