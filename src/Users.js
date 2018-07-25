import React, { Component } from 'react'
import User from './user.json'



class Users extends Component {
	state = {
		pictures: '',
		names: '',
		emails: '',
		phones: '',
		locations: ''
	}

	componentDidMount() {
		const user = User.find(picture => picture.id == this.props.match.params.id)

		this.setState({
			pictures: user.picture.large,
			names: user.name.first + ' ' + user.name.last,
			emails: user.email,
			phones: user.phone,
			locations: user.location.city + ', ' + user.location.state
		})
	}

	componentWillReceiveProps(newProps) {
		if (newProps.match.params.id !== this.props.match.params.id) {

			const user = User.find(picture => picture.id == this.props.match.params.id)

			this.setState({
				pictures: user.picture.large,
				names: user.name.first + ' ' + user.name.last,
				emails: user.email,
				phones: user.phone,
				locations: user.location.city + ', ' + user.location.state
			})
		}
	}

  render() {
    return (
    	<div className='containers'>
				<div id='profilePic'>
					<img src = {this.state.pictures} />
				</div>
				<div className='profile'><i className="fa fa-user"></i>{this.state.names}</div>
				<div className='profile'><i className="fa fa-envelope"></i>{this.state.emails}</div>
				<div className='profile'><i className="fa fa-mobile"></i>{this.state.phones}</div>
				<div className='profile'><i className="fa fa-globe"></i>{this.state.locations}</div>
			
    	</div>
    )
  }
}

export default Users