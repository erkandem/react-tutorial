import React from "react"
import IPAddress from "./IPAddress.js"


var xhr;


class IPAddressContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ip_address: "..."
        };
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(){
        /*
        access from `http://localhost:<port>/` won't work in firefox.
        Try the local network address instead.
        reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed?utm_source=devtools&utm_medium=firefox-cors-errors&utm_campaign=default

        reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        */
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
        // or
        // xhr.onreadystatechange = this.processRequest
    }

    processRequest() {
        /*
        xhr.readyState reference:

        Value 	State               Description
        0       UNSENT              Client has been created. open() not called yet.
        1       OPENED              open() has been called.
        2       HEADERS_RECEIVED    send() has been called, and headers and status are available.
        3       LOADING             Downloading; responseText holds partial data.
        4       DONE                The operation is complete.
        */
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            this.setState({ip_address: response.ip});
        }
    }
    render() {
        return <IPAddress ip={this.state.ip_address}/>
    }
}


export default IPAddressContainer;
