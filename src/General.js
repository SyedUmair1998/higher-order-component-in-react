import React, { Component } from 'react'

const Army = Men => {

    class General extends Component {
        state = {
            shots : 0
        }
        handleShots = () => {
            this.setState({shots:this.state.shots+1});
        }
        render() {
            return (
                <Men shots = {this.state.shots} handleShots = {this.handleShots} />
        )
    }
}  
    return General;
};



export default Army;

