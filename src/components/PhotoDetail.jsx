import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data.json'

export class PhotoDetail extends Component {
  render() {
    const categoryName = this.props.match.params.categoryName
    const category = data[categoryName]
    return (
      <div>
        <div
          className="photo-detail-image"
          style={{
            backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5c75bf3af4755a07a9edee16/1551310652946-8YLLE5ZOWS01K9KZ3BQR/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/9.jpg?format=1000w')`,
          }}
        ></div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/pandas">Pandas</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/pandas/0">Panda Waving</Link>
            </li>
          </ol>
        </nav>
      </div>
    )
  }
}
