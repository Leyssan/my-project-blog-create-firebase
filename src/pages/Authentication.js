import {
//signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword
  } from "../firebase";
  import Form from "react-bootstrap/Form";
  import Button from "react-bootstrap/Button";
  import Card from "react-bootstrap/Card";
  
  import React, { useState } from "react";
  
 
  
  
  const Authentication = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return (
      <div className="container-fluid" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col col-2"></div>
          <div className="col col-8">
            <div className="row">
              <div className="col col-6">
                <Card>
                <Card.Title>User Login</Card.Title>
                  <Card.Body>
                    
                    <div>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
            
                      </Form.Group>
  
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button
                          variant="outline-success"
                          type="submit"
                          onClick={() => {
                            signInWithEmailAndPassword(loginEmail, loginPassword);
                          }}
                        >
                          Login
                        </Button>
                       
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <hr style={{ margin: "5%" }} />
              <div className="col col-6">
                <Card>
                  <Card.Body>
                    <Card.Title>User Registration</Card.Title>
                 
                    <div>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Enter name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
  
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <div className="d-grid gap-2">
                        <Button
                          variant="outline-danger"
                          type="submit"
                          onClick={() => {
                            registerWithEmailAndPassword(name, email, password);
                          }}
                        >
                          Register
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <hr style={{ margin: "5%" }} />
              </div>
            </div>
          </div>
          <div className="col-col-2"></div>
        </div>
      </div>
    );
  };
  
  export {Authentication};