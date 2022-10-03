import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  BasicInformationForm,
  InfoMate,
  PopulationVariables,
  IncomeAndExpense,
  BienesRaices,
  PersonalReference,
  Contact,
  HabbeasData,
} from '../../components/Forms/FormCodeudor/index'
import Modal from '../../components/Modal'
import { ProtectedRoute } from '../../components/protected-route'
import Banner from '../../components/Banner'
import MultiStepIndicator from '../../components/MultiStepIndicator'
import { protectRouteAndRedirect } from '../../utils/protect-route.server'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'

export default function Codeudor({
  primer_nombre = '',
  segundo_nombre = '',
  primer_apellido = '',
  segundo_apellido = '',
  correo = '',
  num_identificacion = '',
}) {
  const router = useRouter()
  const { paso, rol, usuario } = router.query
  const [current, setCurrent] = React.useState(0)

  const sectionForm = {
    isCompletedBasicInformation: false,
    isCompletedInfoMate: false,
    isCompletedPopulationVariables: false,
    isCompletedIncomeAndExpense: false,
    isCompletedBienesRaices: false,
    isCompletedPersonalReference: false,
    isCompletedHabbeasData: false,
  }

  const [, setIsCompletedContactCitizen] = React.useState(false)

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...state,
          [action.fieldName]: action.payload,
        }

      default:
        return state
    }
  }

  const [, dispatch] = React.useReducer(reducer, sectionForm)
  const [form, setForm] = React.useState({ formulario_codeudor: {} })
  const [solicitud_id, setSolicitud_id] = React.useState('')
  const [showModal, setShowModal] = React.useState(false)
  const [, setShowPreRequisitos] = React.useState(true)

  React.useEffect(() => {
    if (['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol)) {
      setShowModal(false)
      setShowPreRequisitos(false)
    }
  }, [rol])

  const handleBack = () => {
    router.push(`/codeudor/${usuario[0]}/${solicitud_id || usuario[1]}?paso=FCO_7&rol=${rol}`)
  }

  return (
    <ProtectedRoute>
      <>
        <Banner
          title="Estás a un paso de cumplir tus sueños"
          image_url={`${process.env.NEXT_BASE_PATH}/solicitud-banner.png`}
        />

        <section className="bg-color_gray_2 pb-24">
          <div className="main-wrapper pt-14 px-4">
            <h1 className="text-center mb-6">
              <span className="text-3xl font-bold">
                Formulario de Codeudor
              </span>
            </h1>
            <div className="w-screen md:w-10/12 mx-auto mb-8">
              <MultiStepIndicator
                current={current}
                paso={paso}
                solicitud_id={solicitud_id}
                usuario={usuario}
                rol={rol}
                form_type="codeudor"
              />
            </div>
            {showModal && (
              <div
                id="modal-root"
                className="absolute inset-y-0 inset-x-0  m-auto h-3/4 
           backdrop-blur-md"
              />
            )}

            <Modal
              Component={() => <HabbeasData {...{ form, setForm, setShowModal }} />}
              modalProps={{ showModal, setShowModal }}
            />

            {['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol) ? (
              <div className="w-full md:w-9/12 mx-auto mb-8">
                <Link href="/backoffice">
                  <a className="btn-secundario">
                    Volver a backoffice
                  </a>
                </Link>
              </div>
            ) : null}

            {/* //TODO: Agregar el multiplaso */}
            <div className="md:w-9/12 mx-auto">
              {paso === 'FCO_1' ? (
                <BasicInformationForm
                  dispatch={dispatch}
                  form={form}
                  setForm={setForm}
                  setSolicitud_id={setSolicitud_id}
                  setCurrent={setCurrent}
                  current={current}
                  userInfo={{
                    primer_nombre,
                    segundo_nombre,
                    primer_apellido,
                    segundo_apellido,
                    num_identificacion,
                  }}
                />
              ) : null}

              {paso === 'FCO_2' ? (
                <InfoMate
                  dispatch={dispatch}
                  form={form}
                  setForm={setForm}
                  solicitud_id={solicitud_id}
                  setCurrent={setCurrent}
                  current={current}
                />
              ) : null}

              {paso === 'FCO_3' ? (
                <PopulationVariables
                  dispatch={dispatch}
                  form={form}
                  setForm={setForm}
                  solicitud_id={solicitud_id}
                  setCurrent={setCurrent}
                  current={current}
                />
              ) : null}

              {paso === 'FCO_4' ? (
                <Contact
                  correo={correo}
                  setIsCompletedContactCitizen={setIsCompletedContactCitizen}
                  form={form}
                  setForm={setForm}
                  solicitud_id={solicitud_id}
                  setCurrent={setCurrent}
                  current={current}
                />
              ) : null}

              {paso === 'FCO_5' ? (
                <IncomeAndExpense
                  dispatch={dispatch}
                  form={form}
                  setForm={setForm}
                  solicitud_id={solicitud_id}
                  setCurrent={setCurrent}
                  current={current}
                />
              ) : null}

              {paso === 'FCO_6' ? (
                <BienesRaices
                  dispatch={dispatch}
                  form={form}
                  setForm={setForm}
                  solicitud_id={solicitud_id}
                  setCurrent={setCurrent}
                  current={current}
                />
              ) : null}

              {paso === 'FCO_7' ? (
                <PersonalReference
                  dispatch={dispatch}
                  form={form}
                  setForm={setForm}
                  solicitud_id={solicitud_id}
                  setCurrent={setCurrent}
                  current={current}
                />
              ) : null}

              {paso === 'FCO_8' ? (
                <div>
                  <p className="text-center text-lg font-semibold">
                    Felicidades. Formulario completado
                  </p>

                  <div className="flex justify-around">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500"
                    >
                      Anterior
                    </button>

                    {rol === 'USUARIO' && (
                      <Link href="/">
                        <button
                              type="button"
                              className="mt-6 p-4 w-2/5 text-white rounded-full bg-color_primary_2_ligth"
                              value="home"
                            > Inicio
                            </button>
                      </Link>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </>
    </ProtectedRoute>
  )
}

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo

  const { params, query } = context
  const { rol } = query
  const [cedula] = params.usuario

  if (rol === 'USUARIO') {
    const responseFetch = await customFetch(`roles/listar-usuario-rol/${cedula}`, {
      type: RequestTypes.auth,
      headers: { Authorization: `Bearer ${sessionInfo.token}` },
    })
    if (responseFetch.status == 200) {

      const dataUser = await responseFetch.json()
      var { nombres, apellidos, cedula: num_identificacion, correo } = dataUser

      var [primer_nombre, segundo_nombre] = nombres.split(' ') || [null, null]
      var [primer_apellido, segundo_apellido] = apellidos.split(' ') || null

      if (!primer_nombre) {
        primer_nombre = null
      }

      if (!segundo_nombre) {
        segundo_nombre = null
      }

      if (!primer_apellido) {
        primer_apellido = null
      }

      if (!segundo_apellido) {
        segundo_apellido = null
      }

      if (!num_identificacion) {
        num_identificacion = null
      }

      if (!correo) {
        correo = null
      }
    } else {
      primer_nombre = null
      segundo_nombre = null
      primer_apellido = null
      segundo_apellido = null
      num_identificacion = null
      correo = null
    }

  } else {
    primer_nombre = null
    segundo_nombre = null
    primer_apellido = null
    segundo_apellido = null
    num_identificacion = null
    correo = null
  }

  return {
    props: {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      num_identificacion,
      correo,
    },
  }
}
