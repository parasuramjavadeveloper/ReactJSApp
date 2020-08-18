import React,{Component} from 'react';
import styled from 'styled-components';
//import AppBar from '@material-ui/core/AppBar';
import Dashboard from './dashboard';
import ReactDOM  from 'react-dom'
import { Link,Route,BrowserRouter as Router,withRouter,Switch,Redirect,useHistory} from 'react-router-dom'
import axios from 'axios'

import history from './history';



const Div=styled.div`
width:50%;
display:flex;
position:center;
background:white;

margin:150px auto;
border:1px solid #eee;
box-shadow:0 2px 3px #ccc;
padding:16px;
text-align:center;
${props => props.vertical && "flex-direction: column;"}
`;
const Wrapper1 = styled.section`
width:50%;
  padding: 4em;
  background: white;
`;
const Wrapper2 = styled.section`
   width:60%;
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
  margin-left: -5em;
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
 class Login extends React.Component{
  
   constructor(props){
   super(props)
   this.state={
    isLoading :false,
    userName:'tracrat',
    roleName:'owneradmin',
    companyName:'Tracrat',
    todayDate :new Date(),
    value1:'',
   value2:'',
   }
    this.handleSubmit= this.handleSubmit.bind(this);
     
    
   }
    handleusername = (e) =>{ 
    this.setState({value1: e.target.value1});
   }
   handlepassword = (e) =>{ 
    this.setState({value2: e.target.value2});
   }
   async handleSubmit(event){
    // loginAuth(obj){
    //   let params = new HttpParams()
    //       .set('grant_type', 'password')
    //       .set('username',obj.userName)
    //       .set('password',obj.password)
    //       .set('client_id','clientid123');
    //   return this.http.post(this.serviceURL , params.toString(), this.httpOptions)
    //       .pipe(
    //           catchError(this.handleError)
    //       );
    // }
    
  

    await fetch(`http://localhost:9085/api/expenses`, {
      method : 'POST',
      // this.headers = new HttpHeaders();
      // this.headers = this.headers.append('Authorization','Basic '+ btoa('clientid123' + ':' + 'clientsecret123'));
      // this.headers = this.headers.append('Content-Type','application/x-www-form-urlencoded');
      // this.httpOptions = {
      //   headers: this.headers
      // };
      headers : {
        'Accept': 'application/json',
        'Authorization':'Basic '+ btoa('clientid123' + ':' + 'clientsecret123'),
        'Content-Type': 'application/json'
      }
      // let query = {id:1};
      // let url = 'https:example.com//xyz.com/search?' + query;
      
      //  fetch(url)
    });
    
    event.preventDefault();
    this.props.history.push("/expenses");
   }


  
  
    onclick=()=>{
  
     history.push('/dashboard')
  window.location.reload();
     XMLHttpRequestUpload.setRequestHeader('grant_type',)
      console.log('dashboard');


    }

    render()
    {


     
       return(
        

 
 
     <Div>
      <Wrapper1>
     <Title>Login</Title><br/>
     <Para>Sign into your account</Para>
    

   <Input placeholder='Username' value1={this.state.value1} onChange={this.handleusername} type="text" /><br/><br/>
   <Input placeholder='Password' value2={this.state.value2} onChange={this.handlepassword} type="password" /><br/><br/>


     <Button onClick={this.onclick}>Login</Button>


      </Wrapper1>
      <Wrapper2>
     <Titles>GoTracRat</Titles>&nbsp;
    
      <Paras>Version:1.0</Paras>&nbsp;&nbsp;
     <Mat>TracRat® is the most advanced online electric motor management software or repairable asset management solution available</Mat>


      </Wrapper2>
     
      </Div>
     
      
     
       
   
              
               
          
         
              
        )
    }
  






  }
    



export default Login;