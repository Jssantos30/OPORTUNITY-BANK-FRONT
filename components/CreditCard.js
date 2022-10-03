import React from 'react'
import Link from 'next/link'

const CreditCard = props => {
  return (
    <div className="w-80 bg-white rounded-lg m-4 p-4 h-md_1 sm:h-md_2 lg:h-md_1 creditCard">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="">
            <img src={props.data.src} alt="" />
          </div>
          <div>
            <p className="text-xl font-bold text-center my-4">
              {props.data.title}
            </p>
            <p
              className={`${props.data.class && props.data.class} text-left ${
                props.data.id === 6 ? 'overflow-y-auto max-h-[180px]' : ''
              }`}
            >
              {props.data.text}
            </p>
          </div>
        </div>
        <div className="text-left mb-4">
          <Link href={props.data.url}>
            <a className="bg-color_primary_2_ligth rounded-full px-4 py-4 w-1/2 text-center text-white font-semibold">
              SOLICITAR CRÉDITO
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
