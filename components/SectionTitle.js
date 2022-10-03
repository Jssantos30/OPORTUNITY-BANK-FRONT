import React from 'react'

const SectionTitle = ({ color_title, children }) => {
  return (
    <div className="flex mx-auto mb-12 md:w-full">
      <h2
        className={`text-3xl border-b-2 w-full text-${color_title} border-${color_title}`}
      >
        {children}
      </h2>
      <h2 className="hidden md:block md:border-b"></h2>
    </div>
  )
}

export default SectionTitle
