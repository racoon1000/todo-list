// import logo from './logo.svg';
import './App.css';
import FirstTodo from './FirstTodo';
import firstTodoData from './firstTodoData';


import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstComponents : firstTodoData
        }
    }

    handleChange = id => {
        const index = this.state.firstComponents.map(first => first.id).indexOf(id);
        this.setState(state => {
            let {firstComponents} = state;
            firstComponents[index].completed = true;
            return firstComponents
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            firstComponents: [...this.state.firstComponents, {
                id: this.state.firstComponents.length,
                description: e.target[0].value,
                completed: false
            }]
        })
    }


    render(){
        const {firstComponents} = this.state;

        const activeTasks = firstComponents.filter(task => task.completed === false)
        const completedTasks = firstComponents.filter(task => task.completed === true)   

        const finalTasks = [...activeTasks,...completedTasks].map(first => {
            return (
                <FirstTodo 
                    key={first.id}
                    description={first.description}
                    complited={first.complited}
                    handleChange={ () => {this.handleChange(first.id)} }
                />
            )
        })

        return(
            // <div className="container">
            //     <div className="card text-center">
            //         <div className="card-header">
            //             <h1>I want...</h1>
            //         </div>
            //         <div className="card-body">
            //             <form onSubmit={this.handleSubmit}>
            //                 <input type='text'/>
            //                 <button type="submit">Plus</button>
            //             </form>
            //             <br />
            //             {finalTasks}
            //         </div>
            //     </div>
            // </div>
            <div className="App-header">
                <h1>I want...</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'/>
                    <button type="submit">Plus</button>
                </form>
                <br />
                {finalTasks}
            </div>
        );
    }
}

export default App