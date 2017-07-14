import React, { Component } from 'react';

export default class TodoInput extends Component{
    render(){
       return(
           <div className="right-top">
                <input type="text"  className="suggetion" placeholder="Write list in here and then press Enter key" 
                onChange={this.changeTitle.bind(this)}
                onKeyPress={this.submit.bind(this)} 
                value={this.props.content} 
               />
           </div>
         )
    }
    submit(e){
        if(e.key === 'Enter'){
            // if(e.target.value.trim() !==''){
            //     this.props.onSubmit(e)
            // }
            this.props.onSubmit(e)
        }
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}
