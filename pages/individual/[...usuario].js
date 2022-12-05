import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  BasicInformationForm,
  ContactCitizenForm,
  CreditDestinationForm,
  FinancialReportApplicant,
  InfoBusiness,
  InfoMate,
  PopulationVariables,
  ReferencesForm,
  HabbeasData,
} from '/components/Forms/FormIndividual/index.js'
import MultiStepIndicator from '../../components/MultiStepIndicator'
import Modal from '../../components/Modal'
import FormPrerequisitos from '../../components/Forms/FormPrerequisitos/index'
import { ProtectedRoute } from '../../components/protected-route'
import { useRouter } from 'next/router'
import Banner from '../../components/Banner'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'
import { protectRouteAndRedirect } from '../../utils/protect-route.server'

export default function Individual({
  primer_nombre = '',
  segundo_nombre = '',
  primer_apellido = '',
  segundo_apellido = '',
  num_identificacion = '',
  correo = '',
}) {
  const router = useRouter()
  const { paso, rol, usuario } = router.query
  const [, setIsCompletedCreditDestination] = React.useState(false)
  const [, setIsCompletedBasicInformation] = React.useState(false)
  const [, setIsCompletedInfoMate] = React.useState(false)
  const [, setIsCompletedPopulationVariables] = React.useState(false)
  const [, setIsCompletedContactCitizen] = React.useState(false)
  const [, setIsCompletedInfoBusiness] = React.useState(false)
  const [, setIsCompletedReferenceForm] = React.useState(false)
  const [, setIsCompletedFinancialReportApplicant] = React.useState(false)
  const [, setIsCompletedHabbeasData] = React.useState(false)
  const [form, setForm] = React.useState({ formulario_individual: {} })
  const [showModal, setShowModal] = React.useState(true)
  const [, setShowPreRequisitos] = React.useState(true)
  const [solicitud_id, setSolicitud_id] = React.useState('')
  const [current, setCurrent] = React.useState(2)

  React.useEffect(() => {
    if (['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol)) {
      setShowModal(false)
      setShowPreRequisitos(false)
    }
  }, [rol])

  const handleBack = () => {
    router.push(`/individual/${usuario[0]}/${solicitud_id || usuario[1]}?paso=FDE_9&rol=${rol}`)
  }
  const handleHome = () => {
    router.push("/")
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
            <Head>
              <title>Banco de las oportunidades</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-center mb-6">
              <span className=" text-3xl font-bold">
                Solicitud de crédito
              </span>{' '}
            </h1>
            <div className="w-screen md:w-10/12 mx-auto mb-8">
              {['FDE_0', 'FDE_1'].includes(paso) ? null : (
                <MultiStepIndicator
                  current={current}
                  paso={paso}
                  solicitud_id={solicitud_id}
                  usuario={usuario}
                  rol={rol}
                  form_type="deudor"
                />
              )}
            </div>

            {paso === 'FDE_0' ? (
              <div
                id="modal-root"
                className="absolute inset-y-0 inset-x-0  m-auto h-3/4 backdrop-blur-md"
              />
            ) : null}
            {paso === 'FDE_0' ? (
              <Modal
                Component={() => (
                  <HabbeasData
                    {...{ form, setForm, setIsCompletedHabbeasData, setShowModal }}
                  />
                )}
                modalProps={{ showModal, setShowModal }}
              />
            ) : null}

            {['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol) ? (
              <div className="w-full md:w-9/12 mx-auto mb-8">
                <Link href="/backoffice">
                  <a className="bg-color_primary_2_ligth text-white rounded-lg  px-6 py-2 border hover:bg-color_primary_2 font-semibold">
                    Volver a backoffice1
                  </a>
                </Link>
              </div>
            ) : null}

            <div className="md:w-9/12 mx-auto">
              {paso === 'FDE_1' ? (
                <FormPrerequisitos
                  setShowPreRequisitos={setShowPreRequisitos}
                  form={form}
                  setForm={setForm}
                />
              ) : null}

              <React.Fragment>
                {paso === 'FDE_2' ? (
                  <BasicInformationForm
                    setIsCompletedBasicInformation={setIsCompletedBasicInformation}
                    setCurrent={setCurrent}
                    current={current}
                    form={form}
                    setForm={setForm}
                    setSolicitud_id={setSolicitud_id}
                    userInfo={{
                      primer_nombre,
                      segundo_nombre,
                      primer_apellido,
                      segundo_apellido,
                      num_identificacion,
                    }}
                  />
                ) : null}

                {
                  //isCompletedBasicInformation &&
                  paso === 'FDE_3' ? (
                    <CreditDestinationForm
                      setIsCompletedCreditDestination={setIsCompletedCreditDestination}
                      setCurrent={setCurrent}
                      current={current}
                      form={form}
                      setForm={setForm}
                      solicitud_id={solicitud_id}
                    />
                  ) : null
                }

                {
                  //isCompletedCreditDestination &&
                  paso === 'FDE_4' ? (
                    <InfoMate
                      setIsCompletedInfoMate={setIsCompletedInfoMate}
                      setCurrent={setCurrent}
                      current={current}
                      form={form}
                      setForm={setForm}
                      solicitud_id={solicitud_id}
                    />
                  ) : null
                }

                {
                  //isCompletedInfoMate &&
                  paso === 'FDE_5' ? (
                    <PopulationVariables
                      setIsCompletedPopulationVariables={setIsCompletedPopulationVariables}
                      setCurrent={setCurrent}
                      current={current}
                      form={form}
                      setForm={setForm}
                      solicitud_id={solicitud_id}
                    />
                  ) : null
                }

                {
                  //isCompletedPopulationVariables &&
                  paso === 'FDE_6' ? (
                    <ContactCitizenForm
                      setIsCompletedContactCitizen={setIsCompletedContactCitizen}
                      setCurrent={setCurrent}
                      current={current}
                      form={form}
                      setForm={setForm}
                      solicitud_id={solicitud_id}
                      correo={correo}
                    />
                  ) : null
                }

                {
                  //isCompletedContactCitizen &&
                  paso === 'FDE_7' ? (
                    <InfoBusiness
                      setIsCompletedInfoBusiness={setIsCompletedInfoBusiness}
                      setCurrent={setCurrent}
                      current={current}
                      form={form}
                      setForm={setForm}
                      solicitud_id={solicitud_id}
                    />
                  ) : null
                }

                {
                  //isCompletedInfoBusiness &&
                  paso === 'FDE_8' ? (
                    <ReferencesForm
                      setIsCompletedReferenceForm={setIsCompletedReferenceForm}
                      setCurrent={setCurrent}
                      current={current}
                      form={form}
                      setForm={setForm}
                      solicitud_id={solicitud_id}
                    />
                  ) : null
                }

                {
                  //isCompletedReferenceForm &&
                  paso === 'FDE_9' ? (
                    <FinancialReportApplicant
                      setIsCompletedFinancialReportApplicant={
                        setIsCompletedFinancialReportApplicant
                      }
                      setCurrent={setCurrent}
                      current={current}
                      solicitud_id={solicitud_id}
                      form={form}
                      setForm={setForm}
                    />
                  ) : null
                }

                {
                  //isCompletedFinancialReportApplicant &&
                  paso === 'FDE_10' ? (
                    <div>
                      <p className="font-bold text-2xl text-gray-700">
                        "Recibimos tu información, la solicitud está en proceso de estudio."
                      </p>

                      <button
                        type="button"
                        onClick={handleBack}
                        className="mt-6 p-4 w-2/5 text-white rounded-full bg-red-500"
                      >
                        Anterior
                      </button>
                      {rol === 'USUARIO' && (
                        <button
                        onClick={handleHome}
                        type="button"
                        className="mt-6 p-4 w-2/5 text-white rounded-full bg-color_primary_2_ligth"
                      >
                        Inicio
                      </button>
                      )}
                    </div>
                  ) : null
                }
              </React.Fragment>
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

    const dataUser = await responseFetch.json()
    if (responseFetch.status == 200) {
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
