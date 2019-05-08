import React from 'react';
import SearchBar from "./components/SearchBar";
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostsContainer/PostContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
