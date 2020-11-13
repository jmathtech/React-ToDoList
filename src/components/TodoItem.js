import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component 
{

    getStyle = () => 
        {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
            }
 
            
        }
    

    render() 
    {
        // destructoring - pulling the values id and title to select each markComplete id
        const{ id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }

                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = 
{
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#3daec4',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    boxShadow: '0 1px 5px 0 #333'

}

export default TodoItem
