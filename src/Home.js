import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import User from './user.json'


class Users extends Component {
  render() {
    return (
    	<div> 
				<div className='title'>My Peeps</div>
				{User.map(user => (
					<Link to={`/users/${user.id}`}>
						<div id='homeContainer'>
						<img id='homeImg' src={user.picture.thumbnail} />
						<div id='homeName' key={user.id}>{user.name.first} {user.name.last}</div>
						</div>
					</Link>
				))}
    	</div>
    )
  }
}

export default Users