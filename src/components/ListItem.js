import React from "react"
// render state
function ListItem(props) {
    const {produkt, marke, preis, kategorie, website} = props.item
    
    return(
        <tr>
            <td>{props.id + 1}</td>
            <td>{produkt}</td>
            <td>{marke}</td>
            <td>{preis}</td>
            <td>{kategorie}</td>
            <td className="product-link"><a href={website}>{website}</a></td>
        </tr>
    )
}

export default ListItem