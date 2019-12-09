import React, {Component} from "react"

class Release extends Component {

  render(){
    return(
      <li className="Release">
      <a href={this.props.url}>{this.props.name}</a>
      </li>
    )
  }

}

export default Release
