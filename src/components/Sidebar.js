import React, { Component } from 'react';

import './Sidebar.css';
import User from './User';
import ActivityLog from './ActivityLog';

class Sidebar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activities: [
                "CS229 - Machine Learning",
                "CS231 - Computer Vision",
                "CS234 - Reinforcement Learning"
            ]
        }

        this.reorderClassList = this.reorderClassList.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    /**
     * Reorders the class list and sets the state to the new array
     */
    reorderClassList() {
        this.setState({ activities: this.shuffle(this.state.activities) });
    }


    /**
     * Just shuffles an array randomly (taken from SO: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
     */
    shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

  
    render() {
        return (
            <div className="Sidebar">
                <User />
                <ActivityLog activities={this.state.activities} />
                <button className="ShuffleButton" onClick={this.reorderClassList}>Reorder the class list</button>
            </div>
        );
    }
}

export default Sidebar;