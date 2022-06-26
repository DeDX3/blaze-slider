import React from 'react'
import './feature.css'
import './slider.css'
import { useBlazeSlider } from '../../hooks/useBlazeSlider'
import { FeatureList } from './featureList'
import ChevronSVG from '@site/static/svg/chevron.svg'

export default function HomepageFeatures() {
  const sliderRef = useBlazeSlider({
    screen: {
      slidesToShow: 3,
      slideGap: '0px',
      loop: false,
    },
    '(max-width: 991px)': {
      slidesToShow: 2,
    },
    '(max-width: 500px)': {
      slidesToShow: 1,
    },
  })

  return (
    <section className="feature-section">
      <div className="container">
        <div className="blaze-slider" ref={sliderRef}>
          <div className="blaze-container">
            <div className="blaze-track-container">
              <div className="blaze-track">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
          <div className="bottom-nav" style={{ height: '40px' }}>
            <button className="blaze-prev">
              <ChevronSVG />
            </button>
            <div className="blaze-pagination"></div>
            <button className="blaze-next" aria-label="next">
              <ChevronSVG />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ title, description, className, color }) {
  return (
    <div className="feature-container">
      <div className={`feature ${className}`}>
        <h3 style={{ color: color }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
