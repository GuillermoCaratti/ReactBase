import React from 'react';


/* Boton contador */
export class Counter extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state ={
            counter : 0
        }
    }
    
    incrementCounter(){
       const currentCounter = this.state.counter 
       this.setState({counter : currentCounter + 1 })
    }
    
    render(){
        return <div>
            <span>{this.state.counter}</span>
            <button onClick={()=> this.incrementCounter() }>
                Incrementar
            </button>
        </div>
    }
}