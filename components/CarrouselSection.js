import { useEffect, useState } from 'react'
import Section from './Section'

const CarrouselSection = props => {
  const { data } = props
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % data.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [active, setActive, data])

  return (
    <>
      {/* <Section title={data[active].title} image_url={data[active].src} color="bg-color_gray_2" height="md">
        <p className="font-section font-semibold text-lg">{data[active].text}</p>
        <div className="flex justify-center items-center">
          {data.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(index)
              }}
              className={`rounded-full h-3 w-3 mt-14 bg-color_gray_4 mx-1 ${
                active === index && 'bg-yellow-500 h-4 w-4'
              }`}
            />
          ))}
        </div>
      </Section> */}
      <section className="md:h-md flex flex-col-reverse md:flex-row items-center py-8 md:py-0 bg-color_gray_2">
        {/* <div className='main-wrapper flex flex-col-reverse items-center md:justify-between h-full md:flex-row bg-red-600'> */}
        <div className="md:w-1/2 flex items-center justify-end">
          <div className="w-full md:w-md">
            <div className="flex flex-col mx-auto text-base md:text-lg w-11/12">
              <h2 className="text-4xl font-semibold mb-5 leading-10">
                {data[active].title}
              </h2>
              <p className="font-section text-lg">{data[active].text}</p>
              <div className="flex justify-center items-center">
                {data.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActive(index)
                    }}
                    className={`rounded-full h-3 w-3 mt-14 bg-color_gray_4 mx-1 ${
                      active === index && 'bg-yellow-500 h-4 w-4'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0 flex justify-center mb-4 md:mb-0 md:w-1/2 bg-cover bg-top bg-no-repeat h-full">
          <img src={data[active].src} alt="img-section" className="w-full h-full" />
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default CarrouselSection
