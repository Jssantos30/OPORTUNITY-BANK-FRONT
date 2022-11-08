import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Acciones(props) {
  const { push } = useRouter()
  const [showMenuActions, setShowMenuActions] = React.useState(false)
  const wrapperRef = React.useRef(null)

  const handleActions = () => { 
    setShowMenuActions(!showMenuActions)
  }
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return ( 
    <div className="relative cursor-pointer">
      <div ref={wrapperRef} onClick={handleActions} className="text-3xl text-gray-500">
        <img width={29} src={`${process.env.NEXT_BASE_PATH}/puntos.svg`}/> 
      </div>

      {showMenuActions ? (
        <div className="menu-on-table absolute -right-0 z-10">
          <ul className="w-full h-full">
            <li
              className=""
              //onClick={handleClick}
            >
              <Link  href={`/backoffice/${props.cedula}?sid=${props.id}`}>
                <a> Ver </a>
              </Link> 
            </li>

            {/* <li
              className=""
              //onClick={handleClick}
            >
              <Link href={`/backoffice/${props.cedula}/historial?sid=${props.id}`}>
                <a> Historial </a>
              </Link>
            </li> */}
            <li
              className=""
              //onClick={handleClick}
            >
              <a
                rel="noopener noreferrer" target={"_blank"}
                href={`backoffice/reporte/${props.id}?cedula=${props.cedula}&rol=${props.rol}`}
              >
                <a> Reporte </a>
              </a>
              
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default Acciones
