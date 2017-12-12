import React, { Component } from 'react'
import striptags from 'striptags';

export default class ArticleItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article : {}
    }
  }

  render () {
    const articleItemStyle = {
      border: '1px solid #ddd',
      margin: '20px',
      padding: '10px',
      width: '50%',
      background: 'ghostwhite',
    };

    const featuredImageStyle = {
      width: '100%',
      marginBottom: '20px'
    }

    return (
      <div className="articleItem" style={articleItemStyle}>
        <h2 className="articleTitle">{this.props.article.title.rendered}</h2>

        <img style={featuredImageStyle} src={
          this.props.article._embedded !== null && typeof this.props.article._embedded['wp:featuredmedia'] !== 'undefined' ? this.props.article._embedded['wp:featuredmedia'][0].source_url : 'https://placeimg.com/300/200/animal'} />

        <br />

        {striptags(this.props.article.excerpt.rendered)}
      </div>
    )
  }
}
