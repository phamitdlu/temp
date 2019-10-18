import React from 'react'

import { Carousel } from 'react-bootstrap';
//import PropTypes from 'prop-types'
import './SlideHeader.scss'

export default class SliderHeader extends React.PureComponent {
  render() {
    var slides = Array(3).fill(true);
    return (
      <Carousel>
        {slides.map((item, i) => (
          <Carousel.Item key={i}>
          <img
              className="d-block w-100"
              src="https://ucarecdn.com/159203d3-881d-4218-baa1-ca4427b48d0d/-/progressive/yes/-/format/auto/-/resize/2000x/"
              alt="First slide"
            />
            <Carousel.Caption className="color-red">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}