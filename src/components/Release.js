import React, {Component} from "react"

class Release extends Component {

  render(){
    return(
      <li className="Release">
      <h4>{this.props.children}</h4>
      <p>{this.props.name}</p>
      <p>{this.props.url}</p>
      </li>
    )
  }

}

export default Release
