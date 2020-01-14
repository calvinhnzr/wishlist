import React, { Component } from "react"

class Profile extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }


    handleClick = () => {
        
    }


    render() {
        return(
            <div>
                <p>Wunschliste von:</p>
                <p>


                    {this.state.name}
                    
                
                </p>
                <input
                        type="text" 
                        placeholder="Enter your name here."
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}

                />
                <button 
                   onClick={}
                
                />
            </div>
        )
    }
}


export default Profile