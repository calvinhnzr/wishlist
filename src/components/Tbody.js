import React from "react"
import ListItem from "./ListItem"

// render state Component and tmpState
function Tbody(props) {
    const listItemComponent = props.data.map((item, index) => <ListItem key={index} id={index} item={item} />)
    
    const {produkt, marke, preis, kategorie, website} = props.tmpData
    return( 
        <tbody>    
            {listItemComponent}
            <tr className="tmpData">                
                <td></td>
                <td>{produkt}</td>
                <td>{marke}</td>
                <td>{preis}</td>
                <td>{kategorie}</td>
                <td><a href={website} style={{color: "#8BE39E"}}>{website}</a></td>
                <td></td>
            </tr>                 
        </tbody>
    )
}



export default Tbody