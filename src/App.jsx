import React, {Component} from 'react';
//import { Button } from 'reactstrap';
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
      <Div>
       <Main/>
      </Div>
    );
  }
}

export default App;
