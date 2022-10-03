import React from 'react'

const Banner = ({ title, image_url }) => {
  return (
    <section className="flex md:h-60 flex-col md:flex-row">
      <div className="md:w-1/2">
        {/* <div style={{
            backgroundImage: `url(${image_url})`
          }} className="w-full h-full object-cover gradient">
          </div> */}
        <img src={image_url} alt="img-capital-semilla" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-center md:justify-start items-center w-11/12 mx-auto md:w-1/2">
        <h1 className="text-4xl lg:text-5xl p-6 font-semibold">
          {title}
        </h1>
      </div>
    </section>
  )
}

export default Banner
