import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Carousel } from 'react-bootstrap';
//import PropTypes from 'prop-types'
import './SlideHeader.scss'

export default class SliderHeader extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
        query SliderHeaderQuery {
          allSliders: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "sliderShow" } } }
            sort: { order: ASC, fields: [frontmatter___position, frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  subtitle
                  featuredImage
                  activated
                  position
                  colorcap     
                  meta {
                    description
                    title
                  }                               
                }
              }
            }
          }
        }
      `}
        render={data => {
          const sliders = {
            posts: data.allSliders.hasOwnProperty('edges')
              ? data.allSliders.edges.map(post => {
                return { ...post.node.fields, ...post.node.frontmatter }
              })
              : false
          }

          return (
            <Carousel>
              {
                sliders.posts.map((item, i) => (                  
                  <Carousel.Item key={'slider-'+i}> 
                    {console.log(item)}
                    <img
                      className="d-block w-100"
                      alt={item.subtitle}
                      src={item.featuredImage}
                    />
                    {
                      item.meta = item.meta | {}                      
                    }
                    <Carousel.Caption className={"color-"+item.colorcap}>
                      <h3>{item.subtitle?item.subtitle:""}</h3>
                      <p>{item.meta.description?item.meta.description:""}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              }
            </Carousel>
          )
        }}
      />
    )
  }
}