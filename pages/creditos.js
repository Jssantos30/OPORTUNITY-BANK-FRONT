import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import { creditsItem } from '../utils/creditsItem'
import Slide from '../components/Slide'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Creditos = () => {
  const [screenWidth, setScreenWidth] = useState()
  const [credits, setCredits] = useState([])

  useEffect(() => {
    setScreenWidth(window.matchMedia('(min-width: 760px)').matches)
    const handleResize = () => setScreenWidth(window.matchMedia('(min-width: 760px)').matches)
    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    if (!screenWidth) {
      setCredits(creditsItem.flat())
    } else {
      setCredits(creditsItem)
    }
  }, [screenWidth, setScreenWidth])

  return (
    <>
      <Banner title="Elige una línea de crédito" image_url={`${process.env.NEXT_BASE_PATH}/creditos-banner.png`} />

      <section className="bg-color_gray_2 flex flex-col justify-center pt-6 md:pt-24">
        <h2 className=" text-3xl font-semibold text-center mb-4">
          ¿Con cuál de estos créditos te identificas?
        </h2>
        <div id="carouselOverrides">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            interval={30000}
            autoPlay={true}
          >
            {credits.map((item, idx) => (
              <Slide key={idx} slides={item} />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default Creditos
