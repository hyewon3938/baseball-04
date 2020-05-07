import React from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components"
import Main from "./components/Main";
import Game from "./components/Game";

function App() {
  const StyleReset = createGlobalStyle`
        ${reset};
    `;
  const Wrap = styled.div`
    background : #241D4F;
    width : 1500px;
    height : 800px;
    margin : auto;
    margin-top : 40px;
    box-sizing : border-box;
    padding : 10px;
  `;

  return (
  
      <Wrap>
        <Switch>
        <Route exact path="/" component ={Main}/> 
        <Route path="/game" component ={Game}/> 
        </Switch>
     
      </Wrap>
    
    
  );
}
export default App;
