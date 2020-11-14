# React - To Do List
A web application built in React.

## Demo
[Click here to demo the "To-Do List"](https://jmathtech.github.io/React-ToDoList/)
(Be sure to click the "Home" link to insert a data entry.)


## Creating the App.js, adding an about page, the header and a React router
The rest of the code will be in the repository (deployment)
```jsx
  // Render 
  // No props since its running in App.js
  // Run React.Fragment for the React Router to route the ToDo state in Home and one for the About page
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

## Special Thanks
[Traversy Media"](https://www.traversymedia.com)
