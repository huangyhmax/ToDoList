import React, {Component} from 'react';
import './todolist_new.css'

{/*<div className='tab-container'>
    <nav className='nav-tab'>
        {React.Children.map(this.props.children,
        (element,index)=>(<div onClick={this.changeTab.bind(this,index)} 
        className={this.addTitleClass(index)}>{element.props.name}</div>)
        )}
    </nav>
    <div>
        {React.Children.map(this.props.children,
        (element,index)=>(<div className={this.addContentClass(index)}>{element}</div>))}
    </div>
</div>

<section name='red'>我是红色</section>
<section name='blue'>我是蓝色</section>
<section name='yellow'>我是黄色</section>
<section name='green'>我是绿色</section>

<li className="noteclass active" onClick={}>
<input type="text" 
placeholder="Write list name." 
className="note-item active" value={}/> 
</li>
这里到时候再把input抽离出来


*/}
export default class Todoaa extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // listclass:['blue','haha','wow'],
            todoList:[
                {blue:[{title:'aa',cc:'aav'},{title:'ff',cc:'ee'}]},
                {haha:[{title:'aay',cc:'aavy'},{title:'ffi',cc:'eei'}]},
                {good:[{title:'aass',cc:'aavcc'},{title:'ffe',cc:'eep'}]},
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
            <Todonew>
                {lis}
            </Todonew>
            // <Todonew>
            //     <section name='red'>我是红色</section>
            //     <section name='blue'>我是蓝色</section>
            //     <section name='yellow'>我是黄色</section>
            //     <section name='green'>我是绿色</section>
            // </Todonew>
         )
    }
}

class Todonew extends Component{
    constructor(props){
        super(props);
        this.state={
            currentIndex:0,
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
        return (
            <div>
                <h3>To Do List</h3>
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
                            <div className="add">+</div>
                            Add ListClass
                        </div>
                    </nav>
                    <div>
                        {React.Children.map(this.props.children,
                        (element,index)=>(
                            <div className={this.addPanelClass(index)}>
                                <div className="right-top">
                                    <input type="text"  className="suggetion"/>
                                </div>  
                                <ul>
                                    <li className="list-normal">
                                        {element}
                                    </li>
                                </ul>
                                {/*<div className="addlist">
                                    <div className="add_">+</div>Add List
                                </div>*/}
                            </div>
                            )
                        )}
                    </div>
                    
                </section>
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
}


