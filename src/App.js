import React, { Component } from 'react';
import './App.css';
import EnrollmentForm from './EnrollmentForm';
import DisplayForm from './DisplayForm';

class App extends Component {
  constructor(props){
    super(props);
  this.state ={
    name : '',
    rollNo : ''
  }
}
  onSubmitFormMain(e){
    console.log("printing e object",e.name);
    this.setState({name :e.name, rollNo :e.rollNo});
    console.log("printing state",this.state.name);
    
  }
  render() {
    return (
      <div>
      <EnrollmentForm onSubmitForm ={(e) => this.onSubmitFormMain(e)}/>
      <DisplayForm name={this.state.name} rollNo={this.state.rollNo}/>
      </div>
    );
  }
}

export default App;
