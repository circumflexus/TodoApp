import React from "react";

import AppHeader from '../AppHeader/AppHeader';
import SearchBar from '../SearchBar/SearchBar';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoList from '../TodoList/TodoList';

import './App.css';

const App = () => {
  const todoData = [
    { label: 'First task', important: true, id: 1},
    { label: 'Second task', important: false, id: 2},
    { label: 'Third task', important: false, id: 3}
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={3} done={0} />
      <div className="top-panel d-flex">
        <SearchBar />
        <ItemStatusFilter />
      </div>
      <TodoList 
        itemData={todoData}
        onDelete={(id) => console.log('Del: ', id)} />
    </div>
  );
};

export default App;