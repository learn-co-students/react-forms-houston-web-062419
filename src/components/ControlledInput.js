// Code ControlledInput Component Here
import React from 'react'

export default class ControlledInput extends React.Component {

    state = {
        value: ""
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
    }
    
    render() {
        return(
            <form onSubmit={(e) => {this.handleSubmit(e)}} >
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </form>
        )
    }
}