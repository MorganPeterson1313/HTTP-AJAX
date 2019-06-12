import React, { Component } from 'react'
import axios from 'axios';

export class Friend extends Component {
    constructor(props){
        super(props);
        this.state ={
            friend:null

        }

    }





    saveFriend = (friend) => {
    
    
        const addToPost = this.props.addToPost;
       
           addToPost(friend);
       
       }

       componentDidMount() {
        
        
        const id = this.props.match.params.id;
    
        console.log(this.props.match.params.id)
        // console.log(id)
        //  const movie = this.state.movie.find(movie=> (`${movie.id}` === id))
        this.fetchFriend(id);
        // this.setState({movie: })
      
      }


      fetchFriend = id  => {
        axios
          .get(`http://localhost:5000/api/friends/${id}`)
          .then(response => {
            this.setState(() => ({ friend: response.data }));
          })
          .catch(error => {
            console.error(error);
          });
      };







    render() {
        if (!this.state.friend) {
            return <div>Loading Friend information...</div>;
          }
      
          const { name} = this.state.friend;
          



        return (
            <div>

        Friend:<strong>{name}</strong>



        <div>
        <div onClick={()=>this.saveFriend(this.state.friend)} className="save-button">Save</div>
        </div>

            </div>
        )
    }
}

export default Friend
