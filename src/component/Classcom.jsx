// statefull
//advanced features
//lifecycle methods

import { Component } from "react";

class Classcom extends Component{
    constructor(props, context){
        super()
        this.data={
            name:"kameshwaran"
        }

        this.setData = {
            name:"Kamesh"
        }
    }
    render(){
        return(
            <h1>my name is {this.setData.name}</h1>
        )
    }
}

export default Classcom