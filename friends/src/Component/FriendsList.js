import React, { Component } from 'react'
import axios from 'axios';
export default class FriendsList extends Component {
        constructor(props){
                super(props);
                this.state ={
                    friends:[]

                };


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




    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
          <FriendDetails key={friend.id} friend={friend} />
        ))}
            </div>
        )
    }
}

function FriendDetails({ friend }) {
    const {name } = friend;
    console.log("console of friend in friend list", friend)
    return (

        <div>{name}</div>
    )
}