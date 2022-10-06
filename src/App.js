import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: white;
`;
const Container = styled.div`
  background: red;
  color: white;
  .hero {
  }
`;
function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Button>Click me</Button>
      <Container>
        <div>
          <h3>Hello world</h3>
        </div>
        <div className="hero">hero text</div>
      </Container>
    </div>
  );
}

export default App;
