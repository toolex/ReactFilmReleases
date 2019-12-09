import React, {Component} from "react"
import Release from "./Release"

class ReleasesList extends Component {
  render(){

    const releasesNodes = this.props.releases.map(release => {
      return(
        <Release
        name={release.name}
        key={release.id}
        >
        {release.url}
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
