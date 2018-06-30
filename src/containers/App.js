import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//parent give STATE >> childern got props
class App extends Component {
	constructor() {
		super()
		//smart component
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots: users})});
	}

	//every time you make your own method on a component
	onSeachChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ? <h1>Loading Robots</h1> : (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSeachChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
		);
	}
}

export default App;