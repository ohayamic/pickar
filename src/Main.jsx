import React, { Component } from 'react'
import styled from 'styled-components';
import Calculator from './Calculator'
export default class Main extends Component {

    state = {
        from: "EUR",
        to:"USD",
        amount:"10",
        History: [
            {}
        ]
    }


    render() {

        const Container = styled.header`
        position: relative;
        text-align: left;
        align-content: center;
        background-color: #333333;
        height :450px;
        width:80%;
        margin:auto;
        `;

        const InnerContainer = styled.div`
        margin-left:60px;
         `;


        const H1Div = styled.div`
        color:white;
        padding-top: 50px;
        font-size:30px;
         `;

        const ContainerBody = styled.div`
        color:white;
        margin-top:100px;
        margin-bottom:180px;
        font-size:40px;
        `;
      


        return (
        <div>
            <Container >
                <InnerContainer>
                    <H1Div>pickar</H1Div>
                    <ContainerBody>Convert currencies in real-time.</ContainerBody>
                </InnerContainer> 
                <Calculator/>
                
            </Container>
        </div>
            
        )
    }
}
