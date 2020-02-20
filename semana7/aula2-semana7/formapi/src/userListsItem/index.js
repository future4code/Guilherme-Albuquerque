import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class UserListItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

handleOnDelete = () => {
    const url = `${baseUrl}/users/deleteUser?id=${this.props.user.id}`
    const axiosConfig = {
        headers: {
            "api-token": "guilherme"
        }
    }
    
    const DeleteUserRequest = axios.delete(url, axiosConfig)

    DeleteUserRequest.then((response) => {
        {this.props.DeleteUser()}
        alert("Usuario deletado")
    }).catch(error => {
        alert(error.message)
    })


}
 

render () {
    return (
        <li>
            {this.props.user.name} <button onClick = {this.handleOnDelete}>X</button>
        </li>
    )
}
}

export default UserListItem