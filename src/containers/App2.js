import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            // searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    }
    // onSearchChange =(event)=>{
    //     this.setState({searchfield:event.target.value})
    //     // const filteredRobots = this.state.robots.filter(robot=>{
    //     //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    //     // })
    //     // console.log(filteredRobots);
    // }
    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length?
            <h1>Loading</h1>:
         (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}
export default App;
