# React To Do List
A web application built in React.

## Demo
[Click here to demo the "To-Do List"](https://jmathtech.github.io/React-ToDoList/)
(Be sure to click the "Home" link to insert a data entry.)


## Creating the App.js, adding an about page, the header and a React router
The rest of the code will be in the repository (deployment)
```react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import { v4 as uuidv4 } from 'uuid';

import './index.css';

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
```

## Example (demo screencast)
![2020-11-13-15-16-40](https://user-images.githubusercontent.com/36749450/99124615-7fa6df80-25d0-11eb-89c9-64ce67e07e31.gif)

## License
GPL v3.0
