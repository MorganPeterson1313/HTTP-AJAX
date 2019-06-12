import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FriendsList from './Component/FriendsList';
import Friend from './Component/Friend';
import Post from './Component/Post';

export default class App extends Component {
  constructor(){
super();
this.state ={
            savedPost:[]
};
  }




addToPost = post => {
  const savedPost = this.state.post;
  savedPost.push(post);
  this.setState({ savedPost });
};



  

  render(){
  return (
    <div className="App">
      <Post post={this.state.savedPost}/>
      <Route  path="/" component={FriendsList} />
      <Route path="/friend/:id" render={props=> <Friend   {...props} addtoPost={this.addToPost}/> }/>
    </div>
    );
  }
}

