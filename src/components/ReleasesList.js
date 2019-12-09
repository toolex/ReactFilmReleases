import React, {Component} from "react"
import Release from "./Release.js"

class ReleasesList extends Component {
  render(){

    const releasesNodes = this.props.releases.map(release => {
      return(
        <Release
        name={release.name}
        key={release.id}
        url={release.url}
        >
        </Release>
      )
    })

    return (
      <ul className="ReleasesList">
      {releasesNodes}
      </ul>
    )
  }
}
export default ReleasesList
