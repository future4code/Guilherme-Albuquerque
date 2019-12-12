import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import UserListItem from '../userListsItem/index'


const url = "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers"
const headerConfig = {
    headers: {
        "api-token": "guilherme"
    }
}
class userList extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            allUsers: []
        })

    }

componentWillMount(){
    this.getAllUsers();
    
}

getAllUsers = () => {
    const getAllUsersRequest = axios.get(url, headerConfig)

    getAllUsersRequest.then((response) => {
        this.setState({
            allUsers: response.data.result
        })
    })
}
    

render (){
    return (
        <div>
            <h3>Usuarios cadastrados: </h3>
            {this.state.allUsers.map(user => (
                <UserListItem user={user}  DeleteUser={this.getAllUsers}/>
            ))}    
        </div>
    )
}

}


export default userList;


