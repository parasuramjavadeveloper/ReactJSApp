import React,{Component} from 'react';
import styled from 'styled-components';

const Div=styled.div`
width:50%;
display:flex;
position:center;
background:white;
;
margin:150px auto;
border:1px solid #eee;
box-shadow:0 2px 3px #ccc;
padding:16px;
text-align:center;
${props => props.vertical && "flex-direction: column;"}
`;
const Wrapper1 = styled.section`
width:40%;


  padding: 4em;
  background: white;
`;
const Wrapper2 = styled.section`
width:40%;
  padding: 4em;
  background: red;
`;
const Title = styled.h1`
  font-size: 1.5em;
  
text-align:start;
margin-top:-40px;
  color: black;
`;
const Titles = styled.h1`
  font-size: 1.5em;
  
text-align:center;
margin-top:-8px;
  color: white;
`;
const Para = styled.p`
font-size: 1em;
  
text-align:start;
margin-top:-20px;
  color: black;
`;
const Para1 = styled.p`
font-size: 1em;
  
text-align:start;
margin-top:-25px;
margin-left:520px;
  color: black;
`;
const Input = styled.input`
  padding: 0.5em;
  margin-left: -10em;
  color: black;
  background: papayawhip;
  border: 1px solid black;
 
  border-radius: 1px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:  red;
  color: white;

  font-size: 1em;
  margin-left: -11em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Form = styled.form`
text-align:center;
`;
// const H=styled.h1`
// font-size: 2em;
// text-align:start;
// margin-top:-25px;
// margin-left:480px;
//   color: white;`
;
const Paras= styled.h2`
font-size: 1em;
  
text-align:center;
margin-top:-20px;
  color: white;
`;
const Mat=styled.p`
font-size: 1em;
  
text-align:center;
margin-top:-20px;
  color: white;
`;
class Login extends Component{
    render(){


     
      return(
        

 
 
  <Div>
      <Wrapper1>
     <Title>Login</Title>
     <Para>Sign into your account</Para>
    

<Input placeholder='Username' type="text" /><br/><br/>
<Input placeholder='Password' type="text" /><br/><br/>

<Button>Login</Button>
      </Wrapper1>
      <Wrapper2>
     <Titles>GoTracRat</Titles>
    
    <Paras>Version:1.0</Paras>&nbsp;&nbsp;
<Mat>TracRat® is the most advanced online electric motor management software or repairable asset management solution available</Mat>

{/* <Input placeholder='Username' type="text" /><br/><br/>
<Input placeholder='Password' type="text" /><br/><br/>

<Button>Login</Button> */}
      </Wrapper2>
     
      </Div>
     
      
     
       
   
              
               
          
         
              
        )
    }

    

}
export default Login;