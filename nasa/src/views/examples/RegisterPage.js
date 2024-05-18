
import { useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword
 } from "firebase/auth";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { auth } from "../../firebase";

function RegisterPage() {
  const navigate = useNavigate(); 
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

const [isSignUpActivate,setIsSignUpActive] = useState(null)
const handleMethodChange = () =>{
  setIsSignUpActive(!isSignUpActivate)
}

const handleSignUp = () =>{
  if(!email||!password) return;
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log(user);
    navigate('/login-page');

  })
  .catch((error)=>{
    const errorCode = error.errorCode;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
};

const handleSignin = () =>{
  if(!email||!password) return;
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log(user);
    alert("Successfully loged in")
    navigate('/landing-page');

  })
  .catch((error)=>{
    const errorCode = error.errorCode;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
};

const handleEmail = (event)=>setEmail(event.target.value);
const handlePassword = (event)=>setPassword(event.target.value);

  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/erth.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
               {isSignUpActivate &&  <h3 className="title mx-auto">Welcome Back</h3>}
               {!isSignUpActivate &&  <h3 className="title mx-auto">Welcome</h3>}
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" onChange={handleEmail} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" onChange={handlePassword} />
               {isSignUpActivate &&   <Button block className="btn-round" color="danger" onClick={handleSignin}>
                    Login
                  </Button>}
                  {!isSignUpActivate &&   <Button block className="btn-round" color="danger" onClick={handleSignUp}>
                    Register
                  </Button>}
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                  >
                    Forgot password?
                  </Button>
            {isSignUpActivate &&      <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={handleMethodChange}
                  >
                    Create an account?
                  </Button>}
                  {!isSignUpActivate &&       <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={handleMethodChange}
                  >
                    Alredy have an account?
                  </Button>}
                </div>
            
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()} create 
            by Nisal Yapa
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
