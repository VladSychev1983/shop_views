import React from "react";
import { products } from '../source'

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
            <div>
                <h1>Store component.</h1>
            </div>
        );
    }
}
export default Store;