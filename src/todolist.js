import React, {Component} from 'react';
import './todolist.css'

class Todopanel extends Component{
    render(){
        return(
            <div>
                <h3>To Do List</h3>
                <section className="left">
                    <div className="createnoteclass">
                        <span className="menu"></span>
                        <span className="tips">(4/4 messages)</span>
                        <div className="triangle"></div>
                    </div>
                    <ul>
                        <li className="noteclass active">
                            <input type="text" placeholder="Write list name." className="note-item active"/>
                        </li>
                    </ul>
                    <div className="addlistclass">
                        <div className="add">+</div>
                        Add ListClass
                    </div>
                </section>
                <section className="right hover">
                    <div className="right-top">
                        <input type="text"  className="suggetion"/>
                    </div>  
                    <ul>
                        <li className="list-normal">
                            <input type="text" placeholder="Write list-content." className="notecontent"/>
                        </li>
                        <li className="list-normal">
                            hahah
                        </li>
                    </ul>
                    <div className="addlist">
                        <div className="add_">+</div>Add List
                    </div>
                </section> 
            </div>
        );
    }
}

export default Todopanel;