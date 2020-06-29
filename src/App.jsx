import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Display from './Display'
import styled from 'styled-components';
import Main from './Main'


import './style.css'


class App extends Component {
  render(){
    const Div = styled.div`
     margin-top:-22px;
     padding-top:-10px;
    `;
   
    return (
      <BrowserRouter>
          <Div>
            <Route exact path='/' component={Main} />
            <Route path='/display' component={Display} />
          </Div>
      </BrowserRouter>
      
    );
  }
}

export default App;
