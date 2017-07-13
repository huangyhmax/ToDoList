import React, { Component } from 'react';
import Tabstoggle from './tabstoggle';

import './App.css';



// var Newleancloud = AV.Object.extend('Newleancloud')
// var newleancloud = new Newleancloud()
// newleancloud.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!')
// })


export default class Todoaa extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // listclass:['blue','haha','wow'],
            todoList:[
                {blue:[{title:'aa',cc:'aav'},{title:'ff',cc:'ee'}]},
                {haha:[{title:'aay',cc:'aavy'},{title:'ffi',cc:'eei'}]},
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
                    return <input type="text" placeholder="Write list-content." className="notecontent" value={item.title}/>
                })
                return (<section name={a}>{todos}</section>)
            }
        })
        return(
            <Tabstoggle>
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
}




