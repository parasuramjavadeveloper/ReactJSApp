import React from 'react';
import styled from 'styled-components';
import Radium from 'radium';


const StyleDiv=styled.div`   


width:60%;
margin:16px auto;
border:1px solid #eee;
box-shadow:0 2px 3px #ccc;
padding:16px;
text-align:center;
`;

const person= (props)=> {
  return (
 <StyleDiv>
  <p>Hi this is {props.name} I am {props.age} years old.</p>
  <p>{props.children}</p>
  </StyleDiv>
    ) 
        
}
export default person;