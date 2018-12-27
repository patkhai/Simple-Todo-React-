import React, { Component } from "react"; 

// class SingleTodo extends Component { 
//     // eslint-disable-next-line no-useless-constructor
//     constructor() { 
//         super();
//      }

//      render() {
//          return ( 
//              <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//          );
//      }
// }

const SingleTodo = props => { 
    return (
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    );
}

export default SingleTodo; 
