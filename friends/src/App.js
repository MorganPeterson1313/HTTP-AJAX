import React from 'react';
import axios from 'axios';
import './App.css';
import FriendForm from './Component/FriendForm';
import FriendList from './Component/FriendList';
import { Route } from 'react-router-dom'; 


export default class App extends React.Component {
  constructor(){
      super();

      this.state = {
        activeFriend: null,
        friends:[],
        error:""
      }

  }
  

  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
    .then(response => {
      this.setState(() => ({ friends: response.data }));
      console.log(this.state.friends)
    })
    .catch(error => {
      console.error('Server Error', error);
    });


  }



  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
        this.props.history.push("/");
      })
      .catch(err => console.error(err));
  };

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          activeFriend: null,
          friends: response.data
        });
        this.props.history.push("/");
      })
      .catch(err => console.error(err));
  };

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push("/friends");
  };





  render(){
  return (
    <div className="App">
       <Route exact path="/" render={props => <FriendList  {...props} setUpdateForm={this.setUpdateForm}/> }/>
      <Route path="/friends" render={props=>
         <FriendForm  {...props} friends={this.state.friends}
         addFriend={this.addFriend}
         updateFriend={this.updateFriend}
         activeFriend={this.state.activeFriend}
         
         
         /> }/>
    
    </div>
  );
}
}

