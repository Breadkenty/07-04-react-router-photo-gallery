import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import data from '../data/data.json'

class CategoryItems extends Component {
  render() {
    const { firstPhoto, title, categoryName, position } = this.props

    console.log(typeof position)
    return (
      <li>
        <div
          className="portfolio-image"
          style={{
            backgroundImage: `url(${firstPhoto})`,
            backgroundPosition: `${position}`,
          }}
        >
          <Link to={`/${categoryName}`}>
            <button>{title.charAt(0).toUpperCase() + title.slice(1)}</button>
          </Link>
        </div>
      </li>
    )
  }
}

export class CategoryList extends Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(data).map(categoryName => (
            <CategoryItems
              key={categoryName}
              categoryName={categoryName}
              firstPhoto={data[categoryName].highlightedImage}
              title={categoryName}
              position={data[categoryName].position}
            />
          ))}
        </ul>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/">Home</Link>
            </li>
          </ol>
        </nav>
      </div>
    )
  }
}
