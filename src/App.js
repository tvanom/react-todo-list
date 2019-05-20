import React, {Component} from 'react';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  render(){
    return (
      <div className="App">
        <Header />
        <TodoList todoItems={this.state.todos}/>
      </div>
    );
  }
}

export default App;
