import React, { Component } from "react"
import Thead from "./Thead"
import Tbody from "./Tbody"
import Tfoot from "./Tfoot"

class Table extends Component {
    constructor(props) {
        super(props)
        console.log()
        this.initialState = {  
            produkt: "",
            marke: "",
            preis: "",
            kategorie: "",
            website: "",
        }

        this.state = this.initialState

    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onSubmit = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    

    render() {
        return(
            <table>
                <Thead /> 
                <Tbody
                    data={this.props.data}
                    tmpData={this.state}
                />
                <Tfoot 
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    initialState={this.state}  
                />
            </table>
        )
    }
}

export default Table