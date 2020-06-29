import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data.json'

class PhotoListItem extends Component {
  render() {
    return (
      <li>
        <Link to={`/${this.props.category}/${this.props.id}`}>
          <div
            className="photo-list-image"
            style={{
              backgroundImage: `url(${this.props.photo.imageURL})`,
            }}
          ></div>
        </Link>
      </li>
    )
  }
}

export class PhotoList extends Component {
  render() {
    const categoryName = this.props.match.params.categoryName
    const category = data[categoryName]

    console.log(category)

    return (
      <div>
        <ul className="photo-list-container">
          {category.photos.map((photo, index) => (
            <PhotoListItem
              key={index}
              id={index}
              category={categoryName}
              photo={photo}
            />
          ))}
        </ul>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/pandas">Pandas</Link>
            </li>
          </ol>
        </nav>
      </div>
    )
  }
}
