import React from 'react'

class LightSwitch extends React.Component{

handleClick=()=>{
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled
        }
    })  
}

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    {this.state.toggled? "ON" : "OFF"}
                </button>
            </div>
        )
    }
}
export default LightSwitch