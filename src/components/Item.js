import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject ("Inventory")
@observer
class Item extends Component {

    buyItem = () => this.props.Inventory.buyItem(this.props.item.name)
    
    editItem = () => {
        let newPrice = prompt('Name your Price')
        this.props.Inventory.changePrice(this.props.item.name, newPrice)
    }


    render() {
        let item = this.props.item
        return (
            <div >
                <li>
                    {item.quantity}<span> </span>
                    {item.name} available at<span> </span>
                    <span className="edit" onClick = {this.editItem}>
                        {item.price}
                    </span>$ per item
                    <button className="buyButton"
                        onClick={this.buyItem}>
                        Buy
                    </button>
                </li>
            </div>)
    }
}

export default Item