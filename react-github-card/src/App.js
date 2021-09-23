
import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: [],
    };

  };

  componentDidMount() {
   axios.get("https://api.github.com/users/petrgazarov")
    .then(res => {
      this.setState({user: res.data})
    })
    .catch(err => console.log(err))
  }


  render() {

// console.log(this.state.user)

    
    return(
      <div className="App">
      <UserCard user={this.state.user}/>
  
      </div>

    )
   
  };
}

export default App;
