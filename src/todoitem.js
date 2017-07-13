

import React, { Component } from 'react';
import TodoInput from './todoinput';

export default class TodoItem extends Component {
  render(){
    return (
        <div>
            {React.Children.map(this.props.children,
            (element,index)=>(
                <div className={this.addPanelClass(index)}>
                    <TodoInput />  
                    <ul>
                        <li className="list-normal">
                            {element}
                        </li>
                    </ul>
                </div>
                )
            )}
        </div>
    )
  }
}
