import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import {Container,Input,Button,Label, FormGroup, Form} from 'reactstrap';
import {Link} from 'react-router-dom';


class UserRegister extends Component {
    state = {  }

    constructor(props){
        super(props)
  
        this.state = { 
          isLoading :false,
          Categories:[],
          Expsenses : [],
          date :new Date(),
          item : this.emptyItem
         }
        // this.handleSubmit= this.handleSubmit.bind(this);
        }
   
    render() { 
        const title =<h3>Add User</h3>;
        const optionList= ['india','sweden'];
        return ( 
            <div>
             <AppNav/>
                <Container>
                    {title}
                    
                    <Form>
                    <FormGroup>
                        <Label for="username">UserName</Label>
                        <Input type="username" name="username" id="username" 
                             autoComplete="name"/>
                    
                    </FormGroup>

                    <FormGroup>
                        <Label for="country" >Country</Label>
                        <select>
                                {optionList}
                        </select>
                    
                    </FormGroup>

                    <FormGroup>
                        <Label for="dob">DateOfBirth</Label>
                        <DatePicker />
                    </FormGroup>

                    <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                        <Label for="city">city</Label>
                        <Input type="text" name="city" id="city" />
                        </FormGroup>
                      
                    </div>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>
                    </Form>
                </Container>

            </div>
         );
    }
}
 
export default UserRegister;