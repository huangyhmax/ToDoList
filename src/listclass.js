import React, { Component } from 'react';
// import './listclass.css';

class Leftlist extends Component{
    render(){
        return(
            <nav  className="left">
                <div className="createnoteclass">
                    <span className="menu"></span>
                    <span className="tips">(4/4 messages)</span>
                    <div className="triangle"></div>
                </div>
                <ul>
                    {this.props.listnames}
                </ul>
                <div className="addlistclass">
                    <div className="add">+</div>
                    Add ListClass
                </div>
            </nav>
        )
    }
}
export default Leftlist;
