import React, { Component } from 'react'

export class PhotoList extends Component {
  render() {
    const backgroundImageURL =
      'https://things-i-like.netlify.com/images/baby_panda.jpg'
    const categoryId = this.props.match.params.categoryId

    return (
      <ul className="photo-list-container">
        <li>
          <div
            className="photo-list-image"
            style={{
              backgroundImage: `url(${backgroundImageURL})`,
            }}
          ></div>
        </li>
      </ul>
    )
  }
}

export default PhotoList
