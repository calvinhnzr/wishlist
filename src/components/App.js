import React, { Component } from "react"
import Table from  "./Table"


class App extends Component {
    constructor() {
        super()
        this.state = {
            // state
            data: [
            ],
            
            
        }
    }

    handleSubmit = (tmpData) => {
        this.setState({
            data: [...this.state.data, tmpData]
        });
    }
    render() {
        
        return(
            <form>

          
                <Table
                    data={this.state.data}
                    handleSubmit={this.handleSubmit}
                />
            </form>
        )
    }
}

export default App