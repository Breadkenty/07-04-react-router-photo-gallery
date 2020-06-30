import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data.json'

export class PhotoDetail extends Component {
  render() {
    const categoryName = this.props.match.params.categoryName
    const categoryPhotoIndex = this.props.match.params.categoryPhotoIndex
    const photo = data[categoryName].photos[categoryPhotoIndex]

    return (
      <div>
        <div
          className="photo-detail-image"
          style={{
            backgroundImage: `url(${photo.imageURL})`,
          }}
        ></div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/${categoryName}`}>{categoryName}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={`/${categoryName}/${categoryPhotoIndex}`}>
                {photo.title}
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    )
  }
}
