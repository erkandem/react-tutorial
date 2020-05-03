import React, {Component} from "react"
import "./IPAddress.css"


class IPAddress extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.ip}</h1>
                <p>(this is probably your ip address)</p>
            </div>
        );
    }
}

export default IPAddress;
