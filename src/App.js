import React, { Component } from 'react';
import Tabstoggle from './tabstoggle';

import './App.css';


export default class Todoaa extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listclass:['blue','haha','good','world','awsome'],
            newTodo:'',
            todoList:[
                {blue:[]},
                {haha:[{title:'aay',checked:'aavy',delete:'a'},{title:'ffi',cc:'eei'}]},
                {good:[{title:'aass',cc:'aavcc'},{title:'ffe',cc:'eep'}]},
                {hello:[{title:'123',cc:'654'},{title:'f23e',cc:'99p'}]},
                {world:[{title:'456',cc:'aa43'},{title:'fdfe',cc:'09ep'}]},
                {awsome:[{title:'789',cc:'a46c'},{title:'45e',cc:'e88p'}]},
                
            ]

            // todoList:[
            //     {title:'aa',cc:'aav'},
            //     {title:'ff',cc:'ee'},
            //     {title:'aay',cc:'aavy'},
            //     {title:'ffi',cc:'eei'},
            //     {title:'aass',cc:'aavcc'},
            //     {title:'ffe',cc:'eep'},
            // ]
        }
    }
    render(){
        // let todos=this.state.todoList.map((item,index)=>{
        //     return <input type="text" placeholder="Write list-content." className="notecontent" value={item.title}/>
        // })
        let lis=this.state.todoList.map((items,index)=>{
            for(var a in items){
                let todos=(items[a]).map((item,index)=>{
                    return (
                    <li className="list-normal">
                        <input type="checkbox" className="chx"/>
                        <input type="text" placeholder="Write list-content." className="notecontent" value={item.title}/>
                        <button>删除</button>
                    </li>
                    )
                })
                return (<section name={a}>{todos}</section>)
            }
        })
        return(
            <Tabstoggle addlists={this.addlist.bind(this)} 
            pressvalue={this.state.newTodo} changevalue={this.changeTitle.bind(this)}
            addleft={this.addleftclass.bind(this)}>
                {lis}
            </Tabstoggle>
            // <Todonew>
            //     <section name='red'>我是红色</section>
            //     <section name='blue'>我是蓝色</section>
            //     <section name='yellow'>我是黄色</section>
            //     <section name='green'>我是绿色</section>
            // </Todonew>
         )
    }
    addlist(event){
        this.state.todoList.map((items,index)=>{
            for(var a in items){
                items[a].push({
                    title: event.target.value,
                    cc:'aa'
                })
            }
        })
        this.setState({
            newTodo: '',
            todoList: this.state.todoList
        })
    }
    addleftclass(event){
        let a=JSON.stringify(event.target.value);
        this.state.todoList.push({a:[]})
        this.setState({
            todoList:this.state.todoList
        })

        // this.state.listclass.push(
        //     JSON.stringify(event.target.value)
        // )
        // this.setState({
        //     listclass:this.state.listclass
        // })
        // this.state.todoList.map((items,index)=>{
        //     for(var a in items){
        //         (items[a])=
        //     }
        // })
    }
    changeTitle(event){
        this.setState({
        newTodo: event.target.value,
        todoList: this.state.todoList
        })
    }
// {blue:[]},
}
