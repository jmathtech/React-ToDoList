import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    // set to method called markComplete when a task is completed
    render() {

        // much like a foreach where to map too.
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;