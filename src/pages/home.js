import { Link } from 'react-router-dom';
import restaurantFoodImage from '../assets/restaurant-food.jpg'
import './home.css';

import salad from '../assets/greek-salad.jpg'
import bruschetta from '../assets/bruschetta.jpg'
import desert from '../assets/lemon-dessert.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faStar,faStarHalfStroke,} from '@fortawesome/free-solid-svg-icons'
import photo1 from '../assets/Harlowe_Chicken_Breast_Lemon_Oregano_Garlic.0.jpg'
import photo2 from '../assets/download.jpg'
import photo3 from '../assets/images (1).jpg'
import photo4 from '../assets/images.jpg'




const Home = () => {
  return (
    <> 
       <div className='containerr'>
         <div className='section'>
            <h1>Little Lemmone</h1>
            <h2>Chicago</h2>
            <p> We are a family owned Mediterranean restaurant,<br></br> 
            focused on traditional recipes served with a modern twist.
            </p>
            <button>Reservation table</button>
           </div>
          <div className='photo'>
            <img src={restaurantFoodImage}></img>
          </div>
         </div>

        <div className='hero1'>
            <div className='sp'>
          <p>This weeks special</p>
          <button className='button' href="/menu">Online menu</button>
        </div>
        <div className='cards'>
            <div className='card1'>
                <img src={salad}></img>
                <h4>Greek salad</h4>
                <p>8.99 $</p>
                <p>The famous greek salad of crispy <br></br>
                    lettuce, peppers, olives and <br></br>
                    our Chicago style feta cheese,<br></br>
                   garnished with crunchy garlic. <br></br>
                   </p>
                <button>Order for delivery</button>
            </div>
            <div className='card1'>
                <img src={bruschetta}></img>
                <h4>Bruschetta</h4>
                <p>10.99 $</p>
                <p>Our Bruschetta is made from grilled <br></br>
                bread that has been smeared with <br></br>garlic 
                and seasoned with salt and <br></br>olive oil.</p>
                <button>Order for delivery</button>
            </div>
            <div className='card1'>
                <img src={desert}></img>
                <h4>Lemone desert</h4>
                <p>12.99 $</p>
                <p>This comes straight from grandma's <br></br>recipe
                book, every last ingredient  <br></br> has been 
                sourced and is as <br></br> authentic as can be imagined.</p>
                <button>Order for delivery</button>
               
            </div>
        </div>
     </div>
    

         <section><h4>Reviews</h4></section>
         

      <div className='testlemone'>
                
            <div className='box1'>
                <img  src={photo1}></img>
                <div className='fontawsome'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />

                 </div>
                 <p>peter</p>
                </div>



                <div className='box1'>
                <img  src={photo2}></img>
                <div className='fontawsome'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />

                 </div>
                 <p>sara</p>
                </div>
               
                <div className='box1'>
                <img  src={photo3}></img>
                <div className='fontawsome'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                
                
                 </div>
                 <p>auroura</p>
                </div>
               

                <div className='box1'>
                <img  src={photo4}></img>
                <div className='fontawsome'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfStroke} />
                 </div>
                 <p>william</p>
                </div>
               
               

        </div> 
    

    
    </>
    

  )
}

export default Home;