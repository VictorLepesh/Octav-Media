import React, { Component } from "react";
// Attempting to get JSON data from https://facebook.github.io/react-native/movies.json
export default class JsonOutput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        posts: []
      };
    }
    
    componentDidMount() { // some lifecycle method, whatever that is
      fetch('https://jsonplaceholder.typicode.com/posts') //https://facebook.github.io/react-native/movies.json
      .then( response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded : true,
            posts : result
          });
        },
        (error) => {
          this.setState({
            isLoaded : true,
            error
          })
        }

      )
    }

    
  render() {
    const {error, isLoaded, posts} = this.state;

    if(error){
        return <div>Error in loading</div>
    } else if (!isLoaded) {
        return <div>Loading ...</div>
    } else {
        return(
        <div>
          <ol className="orderedList">
            {
              posts.map(post => (
                <li key={post.id} align="start">
                  <div>
                    <p>{"Posted by: " + post.userId}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                  </div>
                </li>
              ))
            }
          </ol>
        </div>
      );
    }    
  }
}