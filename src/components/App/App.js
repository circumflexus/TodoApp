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
    ],
    searchWord: '',
    filter: 'all'
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

  filterItems(items, filter) {
    switch(filter) {
      case 'all':
        return items;

      case 'active':
        return items.filter((item) => !item.done);

        case 'done':
          return items.filter((item) => item.done);

        default:
          return items;
    }
  }

  filterChange = (filter) => {
    this.setState({filter});
  };

  search(items, word) {
    if(word.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(word.toLowerCase()) > -1
    });
  }

  searchChange = (searchWord) => {
    this.setState({searchWord});
  }

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
    const visibleItems = this.filterItems(
      this.search(this.state.todoData, this.state.searchWord), this.state.filter);

    const doneCount = this.state.todoData.filter((item) => item.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar onSearchChange={this.searchChange} />
          <ItemStatusFilter
            filter={this.state.filter}
            onFilterChange={this.filterChange} />
        </div>
        <TodoList
          itemData={visibleItems}
          onDelete={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone} />
        <ItemAddForm
          addItem={this.addItem} />
      </div>
    );
  }
  
};