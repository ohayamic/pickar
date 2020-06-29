import React, { Component } from 'react'
import styled from 'styled-components';
export default class Calculator extends Component {
    render() {
        const Calculate = styled.div`
            position:absolute;
            height : 100px;
            border: 2px solid white;
            border-radius: 10px;
            background-color:white;
            width: 70%;
            margin: -60px 100px 0px 60px; 
            padding: 30px 0px 0px 30px;

        `;

        const Wrapper = styled.div`
            position: relative;
        `;

        const AmountWrapper = styled.div`
            position: absolute;
            top: 5px;
            left:2%;
            font-size:12px;
        `;

        const FromWrapper = styled.div`
            position: absolute;
            font-size:12px;
            top: 5px;
            left:25%;
        `;

        const ToWrapper = styled.div`
            position: absolute;
            font-size:12px;
            top: 5px;
            left:50%;
            margin-left: 30px;
        `;

        const Input = styled.input`
            margin-top:10px;
            height:25px;
            padding: 5px 0px 5px 10px;
            border: 1px solid #e0ebeb;
            border-radius: 5px;
            background-color: #e0ebeb;
        `;

        const Select = styled.select`
            width: 190px;
            height:38px;
            margin-top:10px;
            padding:10px;
            border: 1px solid #e0ebeb;
            border-radius: 5px;
            background-color: #e0ebeb;
            
        `;

        
        const DisplayContent = styled.header`
        text-align: left;
        background-color: #e6ffff;
        height :500px;
        padding : 150px 0px 10px 100px;
        
      `;


      const ButtonWrapper = styled.div`
            position: absolute;
            font-size:12px;
            top: 5px;
            left:80%;
        `;

      const Button = styled.button`
      font-size: 1.5em;
      margin: 1em 0.5em;
      padding: 0.5em 1.5em;
      border: 2px solid #ff3333;
      border-radius: 5px;
      background: #ff3333;
      color: white;
      font-weight: bold;
      `;

      const ViewHistory = styled.div`
        position: absolute;
        top:410px;
        right:20px;
        margin: 20px;
        text-align: right;
        font-size:15px;
      `;
        return (
            <div>
                <Calculate>
                    <Wrapper>
                        <AmountWrapper>
                        <label >Amount</label><br/>
                        <Input type="text" value="Enter Amount"/>
                        </AmountWrapper>
                        <FromWrapper>
                        <label >From</label><br/>
                        <Select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </Select>
                        </FromWrapper>
                        <ToWrapper>
                        <label >To</label><br/>
                        <Select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </Select>
                        </ToWrapper>
                        <ButtonWrapper>
                            <Button>
                                Convert
                            </Button>
                        </ButtonWrapper>
                        
                    </Wrapper>
                    
                </Calculate>
                <DisplayContent>
                    <ViewHistory>
                        <a href="#">
                            <p>
                                view convertion history>
                            </p>
                        </a>
                        
                    </ViewHistory>
                    <div>
                        <p>One Euro</p>
                        <h1>Display</h1>
                    </div>
                </DisplayContent>
            </div>
            
        )
    }
}
