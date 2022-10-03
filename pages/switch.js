import * as React from 'react'
import Link from 'next/link'
import { ProtectedRoute } from '../components/protected-route'
import { useAuthContext } from '../auth-context'
import LayoutRol from '../Layout/LayoutRol'
import { customFetch, RequestTypes } from '../utils/custom-fetch'
import Title from './../components/Title'
import TitleBackoffice from '../components/TitleBackoffice'

export default function SwitchPage() {
  return (
    <ProtectedRoute>
      <Switch />
    </ProtectedRoute>
  )
}

const INFO_CLASS =
  'mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative'


const Switch = () => {
  const { usuario, rol } = useAuthContext()
  const [requestId, setRequestId] = React.useState(undefined)

  //Tipos de formularios y el paso donde empiezan
  const [FDE, setFDE] = React.useState('FDE_2')
  const [FCO] = React.useState('FCO_1')
  const [isLoading, setIsLoading] = React.useState(true)
  const [infoSol, setInfoSol] = React.useState([])
  const [info, setInfo] = React.useState('')

  React.useEffect(() => {
    async function getCredit() {
      if (['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol)) {
        setIsLoading(false)
        return
      }
      setIsLoading(true)
      try {
        const res = await customFetch(`credito/solicitud/usuario/${usuario}`, {
          type: RequestTypes.credit,
        })

        const data = await res.json()

        //TODO: ¿Qué pasa si la solicitud está en otra posición? hay que hacer un filter pero debemos crear otra pantalla para saber el numero de solicitudes del usuario

        if (res.status === 200) {
          //se desactiva precarga de los pasos
          // setFDE(data[0].deudor.seccion)
          setRequestId(data[0].id)
          const ord = data[0].estado_solicitud.filter(({ actual }) => actual === true)
          const rol_sol = data[0].deudor.persona.num_identificacion == usuario ? 'DEUDOR' : 'CODEUDOR';
          setInfo('Actualmente tienes un solicitud en proceso con id: '+data[0].id+' la cual se encuentra estado: '+ord[0].estado+', y participas como: '+rol_sol +'. Se precargarán los datos con la información relacionada a esa solicitud' )
          setIsLoading(false)
        }

        if (res.status === 404) {
          setFDE('FDE_0')
          setRequestId('')
          setIsLoading(false)
        }
      } catch (err) { }
    }
    getCredit()
  }, [rol, usuario])

  return (<div>
    {(rol == 'USUARIO') ? (
      <LayoutRol rolUser={rol}>
        <Title>Crear solicitud</Title>
        {isLoading ? (
          <div><div className='flex flex-nowrap flex-row items-center'>
            <div className='h-16 flex items-center'>Cargando ...</div>
            <div className="spinner_cont items-center">
              <span className="material spinner" />
            </div>
          </div> </div>
        ) : (
          <div className="h-96 flex">
            <div className="main-wrapper px-4 flex">
              <div className="md:w-2/4 w-full  mx-auto flex flex-col">
                  <a className="text-small font-medium py-2 text-color_primary_2_ligth text-center  rounded-full border-2 border-color_primary_2_ligth hover:bg-color_primary_2_ligth hover:text-white">
                <Link href={`/individual/${usuario}/${requestId || ''}?paso=${FDE}&rol=${rol}`}>
                    ¿Eres deudor?
                </Link>
                  </a>

                  <a className="text-small font-medium py-2 text-color_primary_2_ligth text-center  rounded-full border-2 border-color_primary_2_ligth hover:bg-color_primary_2_ligth hover:text-white mt-4">
                <Link href={`/codeudor/${usuario}/${requestId || ''}?paso=${FCO}&rol=${rol}`}>
                    ¿Eres Codeudor?
                </Link>
                  </a>
              </div>
            </div>
          </div>
        )}
      </LayoutRol>
    ) : (
      <LayoutRol rolUser={rol}>
        <TitleBackoffice>Crear solicitud</TitleBackoffice>
        {isLoading ? (
          <div><div className='flex flex-row items-center'>
            <div className='h-16 flex items-center'>Cargando ...</div>
            <div className="spinner_cont items-center">
              <span className="material spinner" />
            </div>
          </div> </div>
        ) : (
          <div className="card-custom min-h-screen">
              <div className='header-card-custom'>Seleccionar perfil</div>
              <div className='p-3 flex justify-center'><p>Selecciona un perfil</p></div>
              <div className="body-card-custom flex flex-col justify-center items-center">
              
                <Link href={`/individual/${usuario}/${requestId || ''}?paso=${FDE}&rol=${rol}`}>
                <button className='btn-secundario m-2  w-3/5'>
                  <a>
                    Deudor
                  </a>
                </button>
                </Link>
                
                <Link href={`/codeudor/${usuario}/${requestId || ''}?paso=${FCO}&rol=${rol}`}>
                <button className='btn-secundario  w-3/5'>
                  <a>
                    Codeudor
                  </a>
                </button>
                </Link>
              </div>
          </div>
        )}
      </LayoutRol>
    )}</div>)

}
