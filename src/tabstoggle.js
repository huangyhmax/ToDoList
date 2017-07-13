import React, { Component } from 'react';
import TodoInput from './todoinput';
import UserDialog from './UserDialog';
import {getCurrentUser,signOut} from './leanCloud';

class Tabstoggle extends Component{
    constructor(props){
        super(props);
        this.state={
            user: getCurrentUser() ||{},
            currentIndex:0,
        }
    }
    render(){
        return (
            <div>
                <h3>{this.state.user.username  ||'My'} To Do List
                    {this.state.user.id ? <button className="loginout" onClick={this.signOut.bind(this)}>退出登录</button> : null}
                </h3>
                <section >
                    <nav  className="left">
                        <div className="createnoteclass">
                            <span className="menu"></span>
                            <span className="tips">(4/4 messages)</span>
                            <div className="triangle"></div>
                        </div>
                        <ul>
                            {React.Children.map(this.props.children,
                                (element,index)=>(
                                    <li className={this.addTitleClass(index)}
                                    onClick={this.changeTab.bind(this,index)}>
                                        <input name='blue' type="text" placeholder="Write list name." 
                                        className={this.addInputClass(index)} value={element.props.name}/> 
                                    </li>
                                )
                            )}
                        </ul>
                        <div className="addlistclass">
                            <div className="add"></div>
                            Add ListClass
                        </div>
                    </nav>
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
                        <div className="addlist">
                            <div className="add_"></div>Add List
                        </div>
                    </div>
                </section>
                {this.state.user.id ? null : <UserDialog onSignUp={this.onSignUpSignIn.bind(this)} onSignIn={this.onSignUpSignIn.bind(this)}/>}
            </div>
            
        )   
    }
    changeTab(index){
        this.setState({
            currentIndex: index
        })
    }
    addTitleClass(index){
        return index==this.state.currentIndex?'noteclass active':'noteclass';
    }
    addPanelClass(index){
        return index==this.state.currentIndex?'right hover':'right';
    }
    addInputClass(index){
        return index==this.state.currentIndex?'note-item hover':'note-item';
    }
    /*获取当前注册或登陆用户信息的*/
    onSignUpSignIn(user){
        let stateCopy = JSON.parse(JSON.stringify(this.state)) 
        stateCopy.user = user
        this.setState(stateCopy)
    }
    signOut(){
        signOut()
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.user = {}
        this.setState(stateCopy)
    }
}

export default Tabstoggle;