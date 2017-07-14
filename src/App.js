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
            num:6,
            checkbox:'completed',
            // listclass:['blue','haha','good','world','awsome'],
            newTodo:'',
            todoList:[
                {blue:[]},
                {haha:[{title:'haha',status:'completed',deleted:false},{title:'haha',status:'upcompleted',deleted:false}]},
                {good:[{title:'good',status:null,deleted:false},{title:'good',status:null,deleted:false}]},
                {hello:[{title:'hello',cc:'654'},{title:'hello',cc:'99p'}]},
                {world:[{title:'world',cc:'aa43'},{title:'world',cc:'09ep'}]},
                {awsome:[{title:'awsome',cc:'a46c'},{title:'awsome',cc:'e88p'}]},
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

        
        // let rusu =(
        //     this.state.checkbox ==this.state.checkbox === 'completed' ?'':'completed',
        //     this.setState(this.state)
        //     )


        // let result= function toggle(){
            
        //     // this.setState({
        //     //     // todoList:this.state.checkbox
                
        //     // })
        //     let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
        //     stateCopy.checkbox = rusu
        //     this.setState(stateCopy)
        // }
        let lis=this.state.todoList.map((items,index)=>{
            for(var a in items){
                let todos=(items[a]).map((item,index)=>{
                    return (
                    <li className="list-normal">
                        <input type="checkbox" className="chx"  checked={item.status ===this.state.checkbox ? true:false}/>
                        <input type="text" placeholder="Write list-content." className="notecontent" value={item.title} disabled/>
                        <img src={logo} alt="垃圾站" className="del"/>
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
            message={this.messagenum}>
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
        //     }
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
                        cc:'aa'
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
            todoList:this.state.todoList
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
    messagenum(){
        if(this.state.todoList.length === this.state.num){
            return 10
        }else{
            return 9
        }
    }
    // toggle(){
    //    return this.state.checkbox == this.state.checkbox === 'completed' ?'':'completed'
    //     // let lis=this.state.todoList.map((items,index)=>{
    //     //     for(var a in items){
    //     //         let todos=(items[a]).map((item,index)=>{
    //     //             return item.status === this.state.checkbox?true:false
    //     //         })
    //     //     }
    //     // })
        
    // }
}
