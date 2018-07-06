import React, { Component } from 'react';

class EnrollmentForm extends Component {
    constructor(props){
        super(props);
        this.state =
        {   name :'',
            rollNo :''
        }
        this.submitForm=this.submitForm.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangerollNo=this.onChangerollNo.bind(this);
    }
    onChangeName(event){
        event.preventDefault();
        this.setState({name : event.target.value});
    }
    onChangerollNo(event){
        event.preventDefault();
        this.setState({rollNo:event.target.value});
    }
    submitForm(event){
        event.preventDefault();
        console.log("inside submit form");
        console.log(this);
        this.props.onSubmitForm(this.state);
    }
    render(){
        return(
            <form  onSubmit={this.submitForm}>
                <h2>ENROLLMENT FORM</h2>
                <br /><br /> <br />
                <label>Enter your name 
                <input type ="text"  onChange ={this.onChangeName}/>
                </label>
                <br /> <br />
                <label>Enter your roll no  
                <input type ="text"  onChange ={this.onChangerollNo}/>
                </label>
                <br /> <br />
                <input type="submit" value ="Submit"/>
            </form> 
                
        );
    }
}

export default EnrollmentForm;