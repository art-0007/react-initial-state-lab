// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props) { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
            secondsLeft: props.initialCount
        }
    }


    render() {
        return (
            <div>
                {(this.state.secondsLeft === 0) ? <h1>Boom!</h1> : <h1>{`${this.state.secondsLeft} seconds left before I go boom!`}</h1>}
            </div>
        );
    }
}

export default Bomb;