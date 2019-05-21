import React, { Component } from 'react'

export class TodoItem extends Component {

  state = {
    isEditing: false,
    title: this.props.todo.title || ""
  }
  
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? 
      "line-through" : "none"
    }
  }

  handleEditItem = () => {
    this.setState({isEditing: !this.state.isEditing});

    if(this.state.isEditing){
      this.props.editItem(this.props.todo.id,this.state.title)
    }
  }

  onChange = (event) => {
    this.setState({title: event.target.value});
  }

  render() {
    const {id, title} = this.props.todo;
    let titleDisplay  = <p>{title}</p>;
    let editButton    = <button onClick={this.handleEditItem}>Edit</button>;

    if(this.state.isEditing)
    {
      titleDisplay = <input type="text" value={this.state.title} onChange={this.onChange} />
      editButton   = <button onClick={this.handleEditItem}>Save</button>;
    }

    return (
      <div style={this.getStyle()}>
        <span>
          <input type="checkbox" onChange={this.props.toggleItem.bind(this,id)}/>
          {titleDisplay}
        </span>
        {editButton}
        <button onClick={this.props.deleteItem.bind(this,id)}>x</button>
      </div>
    )
  }
}

export default TodoItem
