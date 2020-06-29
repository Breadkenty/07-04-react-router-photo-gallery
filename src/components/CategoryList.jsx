import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export class CategoryList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <div
              className="portfolio-image"
              style={{
                backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5c75bf3af4755a07a9edee16/1551310652946-8YLLE5ZOWS01K9KZ3BQR/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/9.jpg?format=1000w')`,
              }}
            >
              <Link to="/pandas">
                <button>Pandas</button>
              </Link>
            </div>
          </li>
          <li>
            <div
              className="portfolio-image"
              style={{
                backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5c75bf3af4755a07a9edee16/1568561689328-1JAM3LPRXXPE655HYS20/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/081719-19.jpg?format=1000w')`,
              }}
            >
              <Link to="/miniatures">
                <button>Miniatures</button>
              </Link>
            </div>
          </li>
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
