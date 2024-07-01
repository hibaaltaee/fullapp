import logo from '../assets/logo-white.png'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faFacebook,faInstagram,faTwitter} from '@fortawesome/free-solid-svg-icons'




function footer(){
    return(
        
                <div className="footer">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className='box2 timelline'>
                <h5>OPENING TIMES</h5>
                <p>Mon - Wed: 10:30AM - 12:00AM<br></br>
                  Fri: 12:00PM - 1:00AM<br></br>
                  Sat - Sun: 10:30AM - 12:00AM</p>
            </div>
            <div className='box2 contact'>
                <h5>contact us</h5>
                <p>Tel: 123456789 <br></br>
                   Email: hiba@littlelemon.com</p>
            </div>
            <div className='box2 location'>
               <h5>our location</h5>
               <p>chicago st.02</p>

            </div>
        </div>
       
        
    )
}
export default footer;