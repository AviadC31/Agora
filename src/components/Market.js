import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
// import '../App.css';
import Item from './Item';

@inject("Inventory")
@observer
class Market extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => this.props.Inventory.addItem(this.state.newItem)

  render() {
    return (
      <div style={{ "display": "flex", 'justifyContent': 'center' }}>
        <div>
          <input onChange={this.handleChange} placeholder="Add some CrazyAwsome item"
            style={{ "width": "15vw" }} />
          <button onClick={this.addItem}>Add Item</button>
          {this.props.Inventory.items.map((i, ind) => <Item item={i} key={ind} />)}
        </div>
      </div>
    );
  }
}

export default Market
