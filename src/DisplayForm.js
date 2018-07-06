import React , {Component} from 'react';

class DisplayForm extends Component{
    render(){
    return(
        <div>
            <h3>List of students</h3>
            <h5>Name of the students</h5>
            <br />
            {this.props.name}
            <br /> <br />
            <h5>Roll numbers registered</h5>
            <br />
            {this.props.rollNo}
        </div>
    );
}
}
export default DisplayForm;