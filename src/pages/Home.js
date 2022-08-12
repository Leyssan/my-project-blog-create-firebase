
import { auth } from "../firebase";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';




import "../App.css";



const Home = ({ user }) => {
  
  return (
    <div className="container-fluid" style={{ marginTop: "10%" }}>
      <div className="row">
          <Card.Body>

             <Card.Subtitle className="mb-2 text-muted">
             Hello {user.email}
               
            </Card.Subtitle>
          
           
           
            <Button
            style={{margin: '5%'}}
            variant="outline-danger"
            type="submit"
            onClick={() => auth.signOut()}
          >
            Sign out
          </Button>

          <Link to="/blog-private"> Create post </Link>


          </Card.Body>
      </div>
    </div>
  );
};

export  {Home};