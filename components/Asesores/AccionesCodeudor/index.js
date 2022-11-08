import * as React from 'react'
import { useRouter } from 'next/router'
import { useAuthContext } from '../../../auth-context'

function AccionesCodeudor(props) {
    const { rol } = useAuthContext()
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
                <img width={29} src={`${process.env.NEXT_BASE_PATH}/puntos.svg`} />
            </div>

            {showMenuActions ? (
                <div className="menu-on-table absolute -right-0 z-10">
                    <ul className="w-full h-full">
                        <li
                            className=""
                        //onClick={handleClick}
                        >
                            <a
                                rel="noopener noreferrer" target={"_blank"}
                                href={`reporte/cedula=${props.usuario?.persona?.num_identificacion}&rol=${props.usuario?.tipo}`}
          
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

export default AccionesCodeudor