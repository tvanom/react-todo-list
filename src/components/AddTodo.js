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
        if(this.state.title.trim() === "")
        {
           return ;
        }

        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <input type="text" value={this.state.title} onChange={this.onChange}/>
            <input type="submit" value="+"/>
            </form>
        )
    }
}

export default AddTodo
