import React from "react";
import products from '../source'
import IconSwitch from "./IconSwitch";
import ListView from './ListView'

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.defaultIcon  = 'view_list';
        this.state = {
            iconState: this.defaultIcon     //may be view_list or view_module
        }
    }

    render() {
        return (
        <React.Fragment>
        <IconSwitch icon={this.defaultIcon} />
        <ListView products={products}/>
        </React.Fragment>
        );
    }
}
export default Store;