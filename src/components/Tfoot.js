import React, { Component } from "react"
import submiticon from "../img/submit-icon.svg"


class Tfoot extends Component {
    constructor(props) {
        super(props)        
    }

    onInputChange = (event) => {
        const {name, value} = event.target
        this.props.handleChange(name, value)
    }

    handleClick = (event) => {
        event.preventDefault()
        // pass Data if no input is empty
        const tmpValues = Object.values(this.props.initialState)
        const noEmptyFields = tmpValues.every((el) => el !== "" )
        noEmptyFields ? this.props.onSubmit() : alert("Boxes are still empty")

    }

    render() {
        const {produkt, marke, preis, kategorie, website} = this.props.initialState
        
        return(
            <tfoot>
                <tr>
                    <td></td>
                    <td>
                        <input 
                            type="text"
                            placeholder="Produkt"
                            name="produkt"
                            value={produkt}
                            onChange={this.onInputChange}
                            
                        />
                    </td>
                    <td>
                        <input 
                            type="text"
                            placeholder="Marke"
                            name="marke"
                            value={marke}
                            onChange={this.onInputChange}
                            
                        />
                        </td>
                    <td>
                        <input 
                            type="number"
                            placeholder="Preis in Euro"
                            name="preis"
                            value={preis}
                            onChange={this.onInputChange}
                            
                        />
                    </td>
                    <td>
                        <input 
                            type="text"
                            placeholder="Kategorie"
                            name="kategorie"
                            value={kategorie}
                            onChange={this.onInputChange}
                            
                        />
                    </td>
                    <td>
                        <input 
                            type="url"
                            placeholder="Website"
                            name="website"
                            value={website}
                            onChange={this.onInputChange}
                            
                        />
                    </td>
                 

                    <td>
                        <button
                            type="submit"
                            onClick={
                                this.handleClick
                            }
                            className="submit-btn"
                            
                        > 
                        <img src={submiticon} />
                        </button>
                    </td>
                </tr>
                {this.props.sendData}
            </tfoot>
        )
    }
}

export default Tfoot