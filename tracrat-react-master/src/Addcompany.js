import React,{useState} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap'
  import Login from './login'
  //import styled from 'styled-components';
  import { Container } from 'reactstrap';
  import { CustomInput, FormText } from 'reactstrap';
  import { AvForm, AvField } from 'availity-reactstrap-validation';
  import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

  

const Addcompany = (props) => {
    const model=useState({
      "address1":  "",
      "address2":  "",
      "announcement": {
        "announcementdate": new Date().toISOString(),
        "announcementid": 0,
        "announcementtext":  "",
        "company": {

        }
      },
      "city": "",
      "companycontenttype":  "",
      "companyfilename":  "",
      "companyid": 0,
      "userid": sessionStorage.getItem("userId"),
      "description":  "",
      "fax":  "",
      "issandbox": true,
      "lastmodifiedby": "tracrat",
      "name": "",
      "parentcompanyid": 0,
      "phone":  "",
      "postalcode":  "",
      "state":  "",
      "statusid": 0,
      "supplylevelwarning": true,
      "type": {
        "attributesearchdisplay": 0,
        "description": "",
        "entitytypeid": 0,
        "hostingfee": 0,
        "ishidden": true,
        "lastmodifiedby": "",
        "name": "",
        "parentid": 0,
        "typeid": 0,
        "typemtbs": 0,
        "typespareratio": 0
      },
      "url":  "",
      "vendor": false
        
    })





 function  saveCompany() {
    
        Axios.post("http://gotracrat.in:8085/api/company/add",model).then(response=>{
        this.result=response.companyId;
        alert('company successfully added ');
        console.log('added'+this.result);
    },error=>{
        alert('not added');
    }
    )

    ;
   
   
}

  return (
    <div>
      <h1></h1>
      <br/>
      <Card>
        <CardHeader>Adding New Company</CardHeader>
        <CardBody>

        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName" >Name </Label><strong className="text-danger">*</strong>
            
            <Input type="text" name="companyname" id="exampleName" placeholder="Enter Company Name" value={model.name} onChange={e => {
          model.name = e.target.value;} }/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleURL">URL</Label>
            <Input type="url" name="password" id="exampleURL" placeholder="Enter URL" value={model.url}  onChange={e => {
          model.url = e.target.value;} }/>
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePhone">Phone</Label>
            <Input type="number" name="email" id="examplePhone" placeholder="Enter Phone"  value={model.phone} onChange={e => {
          model.phone = e.target.value;} }/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleFax">Fax</Label>
            <Input type="text" name="password" id="exampleFax" placeholder="Enter Fax" value={model.fax} onChange={e => {
          model.fax = e.target.value;} }/>
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleAddress1">Address Line 1</Label>
            <Input type="text" name="email" id="exampleAddress1" placeholder="Enter Address 1"value={model.address1} onChange={e => {
          model.address1 = e.target.value;} }/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleAddress2">Address Line 2</Label>
            <Input type="text" name="password" id="exampleAddress2" placeholder="Enter Address 2" value={model.address2} onChange={e => {
          model.address2 = e.target.value;} } />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="email" id="exampleCity" placeholder="Enter City" value={model.city}  onChange={e => {
          model.city = e.target.value;} }/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="password" id="exampleState" placeholder="Enter State" value={model.state} onChange={e => {
          model.state = e.target.value;} } />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePostal">Postal Code</Label>
            <Input type="text" name="email" id="examplePostal" placeholder="Enter Postal Code"  value={model.postalcode} onChange={e => {
          model.postalcode = e.target.value;} }/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleStatus">Status</Label>
            <Input type="select" name="select" id="exampleStatus" value={model.statusid}>
            <option value="">Select status</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="exampleDescription">Description</Label>
        <Input type="textarea" name="text" id="exampleDescription" placeholder="Enter Description"  />
      </FormGroup>

      <FormGroup>
        <Label for="exampleCustomFileBrowser">Add CompanyLogo</Label>
        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleContact">Primary Contact Name</Label>
        <Input type="text" name="address" id="exampleContact" placeholder="Primary Contact Name"/>
      </FormGroup>
          
      <FormGroup>
        <Label for="exampleCompany">Company Announcements</Label>
        <Input type="textarea" name="text" id="exampleCompany" placeholder="Enter Description" value={model.description} onChange={e => {
          model.description = e.target.value;} } />
      </FormGroup>

     


      <FormGroup check row>
        <Col sm={{ size: 10, offset: 5 }}>
        <Button color="danger" size="lg" onClick={saveCompany}>Save</Button>{' '}
      <Button color="danger" size="lg">Back</Button>

      
        </Col>
      </FormGroup>
           
        </CardBody>
        
      </Card>
<br/>
<br/>
<br/>
      
    </div>
  );
};


export default Addcompany;