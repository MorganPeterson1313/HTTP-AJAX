import React, { Component } from 'react';

export default class Post extends Component {
            constructor(props) {
                         super(props);

                        }



    render() {
        return (
            <div >
        <h3>Saved Friends:</h3>
        {this.props.post.map(friend => (
          <span >{friend.friend}</span>
        ))}
    
      </div>
        );
    }
}

