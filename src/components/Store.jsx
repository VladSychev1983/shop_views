import React from "react";
import products from '../source'
import IconSwitch from "./IconSwitch";
import ListView from './ListView'

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.defaultIcon  = 'view_module';
        this.state = {
            iconState: this.defaultIcon     //may be view_list or view_module
        }
    }

    onSwitch = () => {
        console.log("change state here");
        if (this.state.iconState == "view_module") {
            this.setState( {
                iconState: "view_list",
                })
            } else {
               this.setState( {
                iconState: "view_module",
                })  
            }
        // console.log(this.state.iconState)
    }

    render() {
        return (
        <React.Fragment>
        <IconSwitch icon={this.state.iconState} onSwitch={this.onSwitch} />
        <ListView products={products} icon={this.state.iconState}/>
        </React.Fragment>
        );
    }
}
export default Store;