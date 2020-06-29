import React, { Component } from 'react'
import sample_data from '../data/sample_data.json'
import { PhotoDetail } from './PhotoDetail'
import { Link, Route, Switch } from 'react-router-dom'

export class PhotoList extends Component {
  convertPhotosObjectToComponent(photo) {
    return <PhotoDetail image={photo} />
  }

  render() {
    const categoryId = this.props.match.params.categoryId
    console.log(categoryId)
    // console.log(sample_data.filter(data => data.title === 'Panda Bears'))

    const categoryPhotos = sample_data.pandas.photos

    const photosToRender = categoryPhotos.map(photo =>
      this.convertPhotosObjectToComponent(photo.imageURL)
    )

    return <ul className="photo-list-container">{photosToRender}</ul>
  }
}

export default PhotoList
