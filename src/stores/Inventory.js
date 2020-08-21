import { observable, action, computed } from 'mobx'

class Item {
    @observable name
    @observable price = 0
    @observable quantity = 1

    constructor(name) {
        this.name = name
    }
}

export class Inventory {

    @observable items = []
    @computed get numItems(){
        return this.items.length
    }

    @action addItem = (name) =>{
        let found = this.items.findIndex(i => i.name === name)
        if(found!==-1) this.items[found].quantity++
        else this.items.push(new Item(name))
    } 
    
    @action buyItem = (name) => {
        let found = this.items.findIndex(i => i.name === name)
        if(this.items[found].quantity===1)
            this.items.splice(found,1)
        else this.items[found].quantity--
    }

    @action changePrice = (name, price) => {
        let found = this.items.findIndex(i => i.name === name)
        this.items[found].price = price
    } 
} 

