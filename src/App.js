import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

// JSX
class App extends Component {
  state = {
    todos: []
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }


  // Add ToDo
  AddToDo = (title) => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newToDo] });
  }

  // Render
  // No props sinceits running in App.js
  render() {
      return (
        <Router>
          <div className="App">
           <div className="container">
            <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddToDo AddToDo={this.AddToDo} />
                  <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
            )} />
            <Route path="/about" component={About} />
           </div>
          </div>
        </Router>
    );
  }
}

export default App;