import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div `

background-color:rgba(299, 0, 0, 0.5);
border: solid 2px red;
width: 300px;
height: auto;
margin: 5%;

`;

const List = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;

const Button = styled.button `
width: 100px;
height: 200px;
border-radius: 2%;
background-color:rgba(299, 0, 0, 0.5);
border: solid 2px grey;

`;

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
            <List>
                {this.state.friends.map(friend => (
          <FriendDetails key={friend.id} friend={friend} />
          
        ))}
        
            </List>
        )
    }
}

function FriendDetails({ friend }) {
    const {name, email, age } = friend;
    console.log("console of friend in friend list", friend)
    return (
<Link to={`/friends/${friend.id}`}>
    <Card>
        <div>{name}</div>
        <div>{email}</div>
        <div>{age}</div>
        <Button onClick={e => this.props.setUpdateForm(e, friend)}>
        Update Item
      </Button>
    </Card>
    
        </Link>
    )
}