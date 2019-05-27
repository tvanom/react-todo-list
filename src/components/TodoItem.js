import React, { Component } from 'react'

export class TodoItem extends Component {

  state = {
    isEditing: false,
    title: this.props.todo.title || ""
  }

  toggleIsEditing = () => {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleSaveItem = () => {
    this.toggleIsEditing();
    this.props.editItem(this.props.todo.id,this.state.title);
  }

  onChange = (event) => {
    this.setState({title: event.target.value});
  }

  render() {
    const {id, title} = this.props.todo;
    let completedClass = this.props.todo.completed ? "completed" : "";

    let titleDisplay  = <span className={this.props.todo.completed ? "completed" : null}>{title}</span>;
    let editButton    = <a className="button" onClick={this.toggleIsEditing}>Edit</a>;

    /** @todo convert this to ternary? */
    if(this.state.isEditing)
    {
      titleDisplay = <input type="text" className="text-input" value={this.state.title} onChange={this.onChange} />
      editButton   = <a className="button" onClick={this.handleSaveItem}>Save</a>;
    }

    return (
      <div className={`list-container__list-item`} >
        <span className="list-item__info">
          {this.state.isEditing ? null : <input type="checkbox" onClick={this.props.toggleItem.bind(this,id)} /> }
          {titleDisplay}
        </span>
        <span className="list-item__buttons">
          {editButton}
          <a className="button" onClick={this.props.deleteItem.bind(this,id)}>x</a>
        </span>
      </div>
    )
  }
}

export default TodoItem
