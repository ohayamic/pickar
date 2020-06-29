import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
export default class Display extends Component {
    render() {

        const Container = styled.header`
        position: relative;
        text-align: left;
        align-content: center;
        background-color: #333333;
        height :500px;
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

         const DivLink = styled.div`
          margin: 40px 0px 20px 0px;
          font-size: 12px;
          color: white;
         `;
       const P = styled.p`
        color: white;
       `;
      


        return (
        <React.Fragment>
            <Container >
                <InnerContainer>
                    <H1Div>pickar</H1Div>
                    <DivLink>
                    <Link to='/'> <P>Go back</P> </Link>
                    </DivLink>

                    <div className="container">
  <div className="row">
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
  </div>
</div>
                   
                </InnerContainer> 
            </Container>
        </React.Fragment>
        )
    }
}
