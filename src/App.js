import React from 'react';
import './App.css';
import GithubAPI from './components/GithubAPI';
import GithubProfile from './components/GithubProfile';

function App() {
  return (
    <div className="App">
      <GithubAPI />
      <GithubProfile />
    </div>
  );
}

export default App;
