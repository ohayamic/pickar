import React, { Component } from 'react'
import styled from 'styled-components'
export default class Display extends Component {
    render() {

        const DisplayContent = styled.header`
        position: relative;
        top:0px;
        text-align: left;
        background-color: #e6ffff;
        height :500px;
        padding : 200px 0px 10px 100px;
        margin-top = -200px;
        
      `;
        return (
            <DisplayContent>
                Display
            </DisplayContent>
        )
    }
}
