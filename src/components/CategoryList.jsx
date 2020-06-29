import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class CategoryList extends Component {
  render() {
    const backgroundImageURL = `url('${this.props.photos[0].imageURL}')`
    // console.log(this.props)
    return (
      <li>
        <div
          className="portfolio-image"
          style={{ backgroundImage: `${backgroundImageURL}` }}
        >
          <Link to={`/${this.props.title}`}>
            <button>{this.props.title}</button>
          </Link>
        </div>
      </li>
    )
  }
}
