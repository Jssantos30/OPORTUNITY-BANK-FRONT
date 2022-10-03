import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Btn = props => {
  const pathUrl = useRouter().pathname

  return (
    <Link href={props.href}>
      <a>
        <div
          className={`mx-auto flex my-4 px-4 py-4 btn-aside pr-4 ${
            pathUrl === props.href ? 'btn-aside-active' : 'btn-aside' 
          }`}
        >
          {/* <img
            className="mr-2 w-8 h-6"
            src={pathUrl === props.href ? props.icon_white_url : props.icon_url}
          /> */}
          {/* <image src={props.icon} alt="icon" /> */}
          {props.name}
        </div>
      </a>
    </Link>
  )
}

export default Btn