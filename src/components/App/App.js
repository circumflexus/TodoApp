import React from "react";

import AppHeader from '../AppHeader/AppHeader';
import SearchBar from '../SearchBar/SearchBar';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm';

import './App.css';

export default class App extends React.Component {
  currId = 1;

  state = {
    todoData : [
      this.createItem('First task'),
      this.createItem('Second task'),
      this.createItem('Third task')
    ]
  };

  createItem(text) {
    return {
      label: text,
      important: false,
      done: false,
      id: this.currId++
    }
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const result = todoData.filter((item) => item.id !== id);
      
      return {
        todoData: result
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createItem(text);

    this.setState(({todoData}) => {
      const result = [...todoData, newItem];

      return {
        todoData: result
      }
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((item) => item.id === id);

    const oldItem = arr[index];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  }

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  render() {
    const doneCount = this.state.todoData.filter((item) => item.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar />
          <ItemStatusFilter />
        </div>
        <TodoList
          itemData={this.state.todoData}
          onDelete={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone} />
        <ItemAddForm
          addItem={this.addItem} />
      </div>
    );
  }
  
};