import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ""
    }

    onChange = (event) => {
        this.setState({title: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.title.trim() === ""){
           return ;
        }

        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
            <input 
                type="text" 
                placeholder="Todo item" 
                className="add-form__text-input text-input" 
                value={this.state.title} 
                onChange={this.onChange}
            />
            <input type="submit" className="add-form__submit button" value="Add"/>
            </form>
        )
    }
}

export default AddTodo
