import React, { Component } from 'react';

export default class TodoInput extends Component{
    render(){
        return <input type="text"  className="suggetion" value={this.props.content}/>
    }
}
