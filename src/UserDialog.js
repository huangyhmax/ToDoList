import React, { Component } from 'react';
import './UserDialog.css';
import {signUp,signIn} from './leanCloud';
import logo from './img/clipboard.svg'

class UserDialog extends Component{
    constructor(props){
        super(props)
        this.state = {
        selected: 'signUp',
        formData: {
            username: '',
            password: '',
        }
        }
    }
    switch(e){
        this.setState({
        selected: e.target.value
        })
    }
    signUp(e){
        e.preventDefault()
        let {username, password} = this.state.formData
        let success = (user)=>{
        // console.log(user)
            this.props.onSignUp.call(null,user)
        }
        let error = (error)=>{
            alert(error)
        }
        signUp(username, password, success, error)
    }

    signIn(e){
        e.preventDefault()
        let {username, password} = this.state.formData
        let success = (user)=>{
            this.props.onSignIn.call(null, user)
        }
        let error = (error)=>{
            alert(error)
        }
        signIn(username, password, success, error)
    }

    changeFormData(key, e){
        let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
        stateCopy.formData[key] = e.target.value
        this.setState(stateCopy)
    }
    render(){
        let signUpForm=(
            <form onSubmit={this.signUp.bind(this)}>
                <div className="row">
                    <input type="text" placeholder="Enter your name" value={this.state.formData.username}
                    onChange={this.changeFormData.bind(this, 'username')}/>
                </div>
                {/*<div className="row">
                    <input type="email" placeholder="Enter your email" value={this.state.formData.email}
                     onChange={this.changeUsername.bind(this)}/>
                </div>*/}
                <div className="row">
                    <input type="password" placeholder="Password" value={this.state.formData.password}
                    onChange={this.changeFormData.bind(this, 'password')}/>
                </div>
                <div className="row actions">
                    <button type="submit">注册</button>
                </div>
            </form>
        )
        let signInForm =(
            <form onSubmit={this.signIn.bind(this)}>
                <div className="row">
                    <input type="text" placeholder="Enter your name" value={this.state.formData.username}
                    onChange={this.changeFormData.bind(this, 'username')}/>
                </div>
                <div className="row">
                    <input type="password" placeholder="Password" value={this.state.formData.password}
                    onChange={this.changeFormData.bind(this, 'password')}/>
                </div>
                <div className="row actions">
                    <button type="submit">Login in</button>
                </div>
            </form>
        )
        return(
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <div className="pics">
                        <img src={logo} alt="欢迎图标"/>
                        <h4>Welcom to <strong>To Do List</strong></h4>
                    </div>
                    <nav >
                        <label className={this.addsignupClass.call(this)}>
                            <input type="radio" value="signUp" checked={this.state.selected === 'signUp'}
                            onChange={this.switch.bind(this)}/>
                            Sign Up
                        </label>
                        <label className={this.addsigninClass.call(this)}>
                            <input type="radio" value="signIn" checked={this.state.selected === 'signIn'}
                            onChange={this.switch.bind(this)}/>
                            Sign In
                        </label>
                    </nav>
                    <div>
                        {this.state.selected === 'signUp' ? signUpForm : null}
                        {this.state.selected === 'signIn' ? signInForm : null}
                    </div>
                </div>
            </div>
        )
    }
    addsigninClass(){
        return this.state.selected === 'signIn'?'signin active':'signin'
    }
    addsignupClass(){
        return this.state.selected === 'signUp'?'signup active':'signup'
    }
}

export default UserDialog;