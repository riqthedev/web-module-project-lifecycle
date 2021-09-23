import axios from 'axios';
import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(){
        super();
        this.state = {
            followers: [],
        }

    }

    componentDidMount() {
     axios.get("https://api.github.com/users/petrgazarov/followers")
        .then(res => {
            console.log(res.data)
            this.setState({followers: res.data})
        })
        .catch(err => console.log(err))
    }


   
    render(props) {
        console.log(this.state.followers)
        
    
        return (
            <div>
                <img src={this.props.user.avatar_url} />
                <h1>{this.props.user.name}</h1>
                <h2>{this.props.user.login}</h2>
                <h3>{this.props.user.bio}</h3>
                 <p>Followers:</p>
                 <div>{this.state.followers.map(obj => (<h4>{obj.login}</h4>))}</div>
            </div>
        )
    }
}
