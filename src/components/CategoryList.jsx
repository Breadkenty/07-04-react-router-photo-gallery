import React, { Component } from 'react'
export class CategoryList extends Component {
  render() {
    return (
      <li>
        <div
          className="portfolio-image"
          style={{
            backgroundImage: `url(
              'https://things-i-like.netlify.com/images/baby_panda.jpg'
            )`,
          }}
        >
          <button>{this.props.title}</button>
        </div>
      </li>
    )
  }
}
