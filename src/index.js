import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = 'Type here to search...';
  const searchStyle = {
    fontSize: '20px'
  }
  return <input
    style={searchStyle}
    placeholder={searchText} />;
};

const TodoList = () => {
  const items = ['Drink Coffee', 'Learn React', 'Build Awesom App'];

  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  );
};

const App = () => {
  let isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;

  return (
    <div>
      <div>{new Date().toString()}</div>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
