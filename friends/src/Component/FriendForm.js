import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';



const StyledDivButton = styled.div `
width: 200px;
height: 100px;
background-color: white;
border: purple solid 2px;
border-radius: 10%;





`



export default class FriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends:null,
        };

    }





   

       componentDidMount() {
        
        
        const id = this.props.match.params.id;
    
        console.log("id from params", this.props.match.params.id)
        // console.log(id)
        //  const movie = this.state.movie.find(movie=> (`${movie.id}` === id))
        this.fetchFriend(id);
        // this.setState({friends:`${id}` })
      
      }


      fetchFriend = id  => {
        axios
          .get(`http://localhost:5000/friends/${id}`)
          .then(response => {
         this.setState(() => ({ friends: response.data }));
          })
          .catch(error => {
            console.error(error);
          });
      };


    //   componentWillReceiveProps(newProps){
    //     if(this.props.match.params.id !== newProps.match.params.id){
    //       this.fetchFriend(newProps.match.params.id);
    //     }
    //   }

      saveFriend = (friend) => {
    
    
        const addToPost = this.props.addToPost;
       
           addToPost(friend);
       
       }


    render() {
        console.log("log from friend page", this.state.friends)
        if (!this.state.friends) {
            return <div>Loading Friend information...</div>;
          }
      
          const { name, age, email} = this.state.friends
          console.log("log of name from friend page",name )
          


        return (

          <div>
            <div>
        <div>
        <h4>Friend</h4> 
        <h2>{name}</h2>
        </div>

        <div>
       <h4>Age:</h4>  
       <h2>{age}</h2>
        </div>
            <div>
        <h4>Email:</h4>
        <h2>{email}</h2>
        </div>

       

        {/* <div>
        <StyledDivButton onClick={()=>this.saveFriend(this.state.friends)} >Save</StyledDivButton>
        </div> */}

            </div>
            </div>
        )
    }
}


// function FriendDetails({ friend }) {
//   const {name, age, email } = friend;

//   return (
// <div>
//       <div>{name}</div>
//       <div>{age}</div>
//       <div>{email}</div>
//       </div>
//   )
// }