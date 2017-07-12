import React, {Component} from 'react';
import './todolist.css';
import Leftlist from './listclass';
import TodoItem from './todoitem';
import TodoInput from './todoinput';


class Todopanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            newTodo: 'test',
            ListClass:['haha','haha','hello'],
            todoList: [
                {id:1, title:'第一个待办'},
                {id:2, title:'第二个待办'},
                {id:3, title:'第三个待办'},
            ]
        }
    }
    render(){
        let todos = this.state.todoList.map((item,index)=>{
            return <TodoItem todo={item} />
        })
        let listclass=this.state.ListClass.map((item,index)=>{
            //  console.log(item);
            return <Leftlist lists={item}/> 
        })
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
                         {listclass}
                    </ul>
                    <div className="addlistclass">
                        <div className="add">+</div>
                        Add ListClass
                    </div>
                </section>

                <section className="right hover">
                    <div className="right-top">
                        <TodoInput content={this.state.newTodo}/>
                    </div>
                    <ul>
                        {todos}
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