import React from "react";

import AppHeader from '../AppHeader/AppHeader';
import SearchBar from '../SearchBar/SearchBar';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm';

import './App.css';

export default class App extends React.Component {


  state = {
    todoData : [
      { label: 'First task', important: true, id: 1},
      { label: 'Second task', important: false, id: 2},
      { label: 'Third task', important: false, id: 3}
    ]
  };

  currId = 4;

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const result = todoData.filter((item) => item.id !== id);
      
      return {
        todoData: result
      }
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.currId++
    };

    this.setState(({todoData}) => {
      const result = [...todoData, newItem];
      
      return {
        todoData: result
      }
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={3} done={0} />
        <div className="top-panel d-flex">
          <SearchBar />
          <ItemStatusFilter />
        </div>
        <TodoList 
          itemData={this.state.todoData}
          onDelete={this.deleteItem} />
        <ItemAddForm
          addItem={this.addItem} />
      </div>
    );
  }
  
};