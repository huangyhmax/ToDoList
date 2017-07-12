

import React, { Component } from 'react';
import './todoitem.css';

export default class TodoItem extends Component {
  render(){
    return (
        <li className="list-normal">
            <input type="text" 
            placeholder="Write list-content." 
            className="notecontent" 
            value={this.props.todo.title}/>
        </li>
    )
    
  }
}
