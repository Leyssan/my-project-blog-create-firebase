/*const Home = () => {
    return(
        <div>
            <h1>
               Home
            </h1>
            <p>
                Hello, Misha
            </p>
        </div>

        
    )
}
export {Home} */
import { auth } from "../firebase";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../App.css";

const Home = ({ user }) => {
  return (
    <div className="container-fluid" style={{ marginTop: "10%" }}>
      <div className="row">
          <Card.Body>
            <Card.Title>Home</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.displayName}
            </Card.Subtitle>
            <img src={user.photoURL} alt="" />
            <Button
            style={{margin: '5%'}}
            variant="outline-danger"
            type="submit"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Button>
          </Card.Body>
      </div>
    </div>
  );
};

export  {Home};