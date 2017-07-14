import React, { Component } from 'react';
import Tabstoggle from './tabstoggle';
import logo from './img/delete.svg'
// import {getindex} from './tabstoggle';
import './App.css';


export default class Todoaa extends React.Component{
    constructor(props){
        super(props)
        this.state={
            clickindex:0,
            listclass:'',
            num:0,
            checkbox:'completed',
            // listclass:['blue','haha','good','world','awsome'],
            newTodo:'',
            todoList:[
                
                {haha:[{title:'haha',status:'completed',deleted:false},{title:'haha',status:'completed',deleted:false}]},
                {good:[{title:'good',status:'completed',deleted:false},{title:'good',status:'completed',deleted:false}]},
                {hello:[{title:'hello',status:'completed',deleted:false},{title:'hello',status:'completed',deleted:false}]},
                {world:[{title:'world',status:'completed',deleted:false},{title:'world',status:'completed',deleted:false}]},
                {awsome:[{title:'awsome',status:'completed',deleted:false},{title:'awsome',status:'completed',deleted:false}]},
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
        let lis=this.state.todoList.map((items,index)=>{
            for(var a in items){
                let todos=(items[a]).map((item,index)=>{
                    return (
                    <li className="list-normal">
                        <input type="checkbox" className="chx" onChange={this.toggle.bind(this,item)} 
                        checked={item.status==='completed'?true:false}/>
                        <input type="text" placeholder="Write list-content." className="notecontent" value={item.title} disabled/>
                        <img src={logo} alt="删除图标" className="del"/>
                    </li>
                    )
                })
                return (<section name={a}>{todos}</section>)
            }
        })
        return(
            <Tabstoggle addlists={this.addlist.bind(this)} 
            pressvalue={this.state.newTodo} changevalue={this.changeTitle.bind(this)}
            addleft={this.addleftclass.bind(this)} callbackParent={this.getindex.bind(this)}
            message={this.state.num}>
                {lis}
            </Tabstoggle>
         )
    }
    addlist(event){
        // this.state.todoList.map((items,index)=>{
        //     for(var a in items){
        //         items[a].push({
        //             title: event.target.value,
        //             cc:'aa'
        //         })
        // })
        this.state.todoList.map((items,index)=>{
            if(index === this.state.clickindex){
                // items.push({
                //     title: event.target.value,
                //     cc:'aa'
                // })
                for(var a in items){
                    items[a].push({
                        title: event.target.value,
                        status:'completed'
                    })
                }
                console.log("hah"+index)
                console.log(items)
                console.log(this.state.todoList.length)
            }
        })
        this.setState({
            newTodo: '',
            todoList: this.state.todoList
        })

        // let todos = this.state.todoList
        //     .filter((item)=> !item.deleted)
        //     .map((item,index)=>{})
    }
    addleftclass(event){
        this.state.listclass=event.target.value
        let a=this.state.listclass
        // alert(this.state.listclass)
        // JSON.stringify(event.target.value);
        this.state.todoList.push({[a]:[]})
        this.setState({
            todoList:this.state.todoList,
            num:this.state.todoList.length
        })
    }
    changeTitle(event){
        this.setState({
        newTodo: event.target.value,
        todoList: this.state.todoList
        })
    }
    getindex(indexnow){
        this.setState({
            clickindex: indexnow+1
        })
    }
    
    toggle(e,todo){
        
       console.log(todo)
       todo.status = todo.status === 'completed'? '':'completed'
       
       this.setState(this.state)
       console.log('我是item的status值:'+ todo.status)
       console.log(this.state.todoList)
    }
    // toggle(e,todo){
    //    todo.status = todo.status === 'completed'? '':'completed'
    //    this.setState(this.state)
    // //    console.log(todo.status)
    // //    console.log(this.state.todoList)
    // }
    checkedresult(){
        // this.state.checkbox == this.state.checkbox === 'completed' ?'':'completed'
        this.setState({
            checkbox:this.state.checkbox === 'completed' ?'':'completed'
        })
        this.state.todoList.map((items,index)=>{
            if(index === this.state.clickindex){
                for(var a in items){
                        let test=(items[a]).map((item,index)=>{

                            item.status = item.status === this.state.checkbox ? '':'completed'
                            this.setState(this.state)
                            // console.log(this.state.checkbox)
                            console.log(item.status)
                        })
                    return {test}
                }
            }
        })
        this.setState({
            todoList: this.state.todoList
        })
    }
}
