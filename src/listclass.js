import React, { Component } from 'react';
import './listclass.css';

class Leftlist extends Component{
    render(){
        return(
            <li className="noteclass active">
                <input type="text" 
                placeholder="Write list name." 
                className="note-item active"
                value={this.props.lists}
                />
            </li> 
        )
    }
}
export default Leftlist;
