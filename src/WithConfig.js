import React, { Component } from "react"
import  getEnvironment  from "./environments";

export  function withConfig(Wrapped) {

return class extends Component {

constructor(props) {
	super(props);
this.state = getEnvironment();
}

render() {
	return <Wrapped {...this.props} config={this.state} />
}

}

}
