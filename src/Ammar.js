import React, { Component } from 'react';
import General from './General'


 class Ammar extends Component {
    render() {
        return (
            <div>
                
                <h1>{this.props.shots}</h1>
                <button onClick={this.props.handleShots} >Shoot</button>
            </div>
        )
    }
}
export default General(Ammar);