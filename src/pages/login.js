
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import "./form.css";
import logo from '../assets/logo.png'

function login(){
    return(
       <div className='container'>
        <div className='container3'>
        <img src={logo}></img>
         <div className="forms1">
                <div className="form">
                <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
       
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="name@gmail.com" />
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control type="password" 
                        placeholder="password" />
                </Form.Group>
                <button className='logbutton'>log in</button>
                </div>
                </div>
                
       </div>
       </div>
    )
}
export default login;