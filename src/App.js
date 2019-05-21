import React, {Component} from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: [
        {id: uuid.v4(), title: "Eat breakfast", completed: false},
        {id: uuid.v4(), title: "Eat lunch", completed: false},
        {id: uuid.v4(), title: "Eat dinner", completed: false},
        {id: uuid.v4(), title: "Sleep", completed: false}
      ]
  }

  addItem = (title) => {
    this.setState({
      todos: [...this.state.todos,{
        id: uuid.v4(),
        title: title,
        completed: false
      }]
    });
  }

  deleteItem = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => 
      todo.id !== id
    )]});
  }

  editItem = (id,title) => {
    this.setState({todo: [...this.state.todos.map(todo => {
        if(id === todo.id)
          todo.title = title;
      })
    ]});
  }

  toggleItem = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id)
          todo.completed = !todo.completed;

        return todo;
      })
    });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addItem} />
        <TodoList 
          todoItems  = {this.state.todos} 
          toggleItem = {this.toggleItem}
          editItem   = {this.editItem}
          deleteItem = {this.deleteItem}
          />
      </div>
    );
  }
}

export default App;
