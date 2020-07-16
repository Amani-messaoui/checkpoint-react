
import './App.css';

import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

const App = (props) => {
  return (
    
    <Form className="login-form">
     <h1> MY Account </h1>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label  className="text" for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label className="text" for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label className="text" for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <Row form>
        <Col md={8}>
          <FormGroup>
            <Label className="text" for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label className="text" for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input className="check1"  type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Sign up</Button>
      <div className="text-center pt-3">Or sing in with your social account</div>
      <FacebookLoginButton className="mt-3 mb-3 face "/> 
      <div className="text-center"><a href ="/sing-up">Sing in</a>
      
      </div>
    </Form>
    
  );
}

export default App;
