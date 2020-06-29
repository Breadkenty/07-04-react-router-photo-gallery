import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class PhotoDetail extends Component {
  render() {
    return (
      <li>
        <div
          className="photo-list-image"
          style={{
            backgroundImage: `url(${this.props.image})`,
          }}
        ></div>
      </li>
    )
  }
}
