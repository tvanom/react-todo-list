import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class TodoList extends Component {
  render() {
    return (
        this.props.todoItems.map((todo) => (
            <TodoItem 
                key={todo.id} 
                todo={todo} 
                toggleItem={this.props.toggleItem} 
                editItem={this.props.editItem}
                deleteItem={this.props.deleteItem}
            />
        ))
    )
  }
}

export default TodoList;
