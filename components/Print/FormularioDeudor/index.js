import React from 'react'
import { separadorMillares } from '../../../utils/separadorMillares'
import CustomField from '../CustomField'
import SeccionFormulario from '../SeccionFormulario'
import TextArea from '../TextArea'
import { customFetch, RequestTypes } from '../../../utils/custom-fetch'

function ReporteDeudor({
  estadoCompletoSolicitud, 
  setEstadoCompletoSolicitud,
  query,
  personal,
}) {
  React.useEffect(() => {
    async function run() {
      if (!query.solicitudId) return

      try {
        const url = `credito/solicitudes?vista=TOTAL&solicitud_id=${query.solicitudId}`
        const dataFetch = await customFetch(url, { type: RequestTypes.credit })

        if (dataFetch.status === 200) {
          const informacionSolicitud = await dataFetch.json()

          setEstadoCompletoSolicitud({
            data: [informacionSolicitud], 
            loading: false,
          })
        }
      } catch (err) {}
    }
    run()
  }, [query, setEstadoCompletoSolicitud])

  function getAsesor(numero_identificacion) {
    const asesor = personal.filter(
      asesor => Number(asesor.cedula) === Number(numero_identificacion),
    )
    return `${asesor[0].nombres} ${asesor[0].apellidos}`
  }

  return estadoCompletoSolicitud.loading ? (
    <div>Cargando</div>
  ) : estadoCompletoSolicitud.data.length > 0 ? (
    <>
      <div className={`max-w-2xl `} mx-auto id="capture">
        {estadoCompletoSolicitud.data.map(
          ({ id, tipo, asesor, credito, deudor, prerrequisito }) => (
            <React.Fragment key={id}>
              <div className="paginaUno">
                <header>
                  <div>
                    <label className="flex justify-end text-color_primary_1 ">{`Número de Solicitud : ${id}`}</label>
                  </div>
                  <div className="bg-color_primary_1 flex">
                    <img
                      src={`${process.env.NEXT_BASE_PATH}/LogoBanco.svg`} 
                      alt="logo-banco"
                      className="border rounded-r-[10px]  bg-white py-6 w-36"
                    />
                    <div className="text-white font-semibold flex flex-col w-full justify-center items-center">
                      <h1 className="text-3xl">Solicitudes de Crédito </h1>
                      <h2 className="text-base">Este formulario es gratuito</h2>
                      <h3>FO-DESE-206</h3>
                    </div>
                  </div>
                </header>

                <SeccionFormulario seccion="">
                  <div className="flex my-2 border items-center justify-center mx-auto">
                    <h1 className="font-semibold mr-4">Línea de crédito</h1>
                    <CustomField
                      type={'text'}
                      name={'lineaCredito'}
                      value={tipo}
                      cName="w-full bg-gray-200 "
                    />
                  </div>

                  <div className="flex flex-wrap ">
                    <CustomField
                      type={'text'}
                      name={'nombre_funcionario'}
                      value={
                        asesor?.num_identificacion ? getAsesor(asesor?.num_identificacion) : ''
                      }
                      label={'Nombre del funcionario que entrega'}
                      width={'w-1/2'}
                    />

                    {asesor?.fecha_entrega ? (
                      <CustomField
                        type={'date'}
                        name={'fecha_entrega'}
                        value={asesor?.fecha_entrega ?? ''}
                        label={'Fecha de entrega'}
                        width={'w-1/2'}
                      />
                    ) : (
                      <React.Fragment>
                        <CustomField
                          type={'date'}
                          name={'fecha_entrega'}
                          value={asesor?.fecha_entrega ?? ''}
                          label={'Fecha de entrega (pendiente)'}
                          disabled={true}
                          cName="bg-gray-200"
                          width={'w-1/2'}
                        />
                      </React.Fragment>
                    )}
                    <CustomField
                      type={'text'}
                      name={'central_riesgos'}
                      value={prerrequisito?.no_central_riesgo ? 'No' : 'Si'}
                      label={'Central de riesgos'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'Linea_de_solicitud'}
                      value={credito?.tipo_solicitud ?? ''}
                      label={'Linea de solicitud'}
                      width={'w-1/2'}
                    />
                    <CustomField
                      type={'text'}
                      name={'tipo_de_crédito'}
                      value={credito?.tipo_credito ?? ''}
                      label={'Tipo de crédito'}
                      width={'w-1/2'}
                    />
                  </div>
                </SeccionFormulario>

                <SeccionFormulario seccion="Instrucciones para diligenciar la solicitud">
                  <ul className="text-xs">
                    <li> Lea cuidadosamente el presente formulario antes de diligenciarlo</li>
                    <li>Llene toda la información solicitada</li>
                    <li>Escriba en letra imprenta o a máquina</li>
                    <li>La solicitud no debe presentar borrones ni enmendaduras</li>
                    <li>
                      Su diligenciamiento no compromete al EL BANCO DE LAS OPORTUNIDADES, al
                      otorgamiento del crédito"
                    </li>
                  </ul>
                </SeccionFormulario>
              </div>

              <div className="paginaDos">
                <SeccionFormulario seccion="Destino de crédito">
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'monto_solicitado'}
                      value={
                        separadorMillares(credito?.monto_solicitado) == 'NaN'
                          ? ''
                          : separadorMillares(credito?.monto_solicitado)
                      }
                      label={'Monto Solicitado'}
                      width={'w-1/4'}
                    />
                    <CustomField
                      type={'text'}
                      name={'palzo'}
                      value={credito?.plazo ?? ''}
                      label={'Plazo'}
                      width={'w-1/4'}
                    />
                    <CustomField
                      type={'text'}
                      name={'activos'}
                      value={
                        separadorMillares(credito?.activos) == 'NaN'
                          ? ''
                          : separadorMillares(credito?.activos)
                      }
                      label={'activos'}
                      width={'w-1/4'}
                    />
                    <CustomField
                      type={'text'}
                      name={'capital_trabajo'}
                      value={
                        separadorMillares(credito?.capital_trabajo) == 'NaN'
                          ? ''
                          : separadorMillares(credito?.capital_trabajo)
                      }
                      label={'Capital trabajo'}
                      width={'w-1/4'}
                    />
                  </div>
                  <TextArea
                    name={'descripcion'}
                    value={credito?.descripcion}
                    label={'Descripcion de la inversión'}
                    cName={`h-fit ml-4 w-2/3 `}
                  />
                </SeccionFormulario>

                <SeccionFormulario seccion="Informacion básica">
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'razon_social'}
                      value={deudor?.persona?.razon_social ?? 'No aplica'}
                      label={'Razón social'}
                      width={'w-1/2'}
                    />
                    <CustomField
                      type={'text'}
                      name={'NIT'}
                      value={deudor?.persona?.nit ?? 'No aplica'}
                      label={'NIT'}
                      width={'w-1/2'}
                    />
                    <CustomField
                      type={'text'}
                      name={'tipo_identificacion'}
                      value={deudor?.persona?.tipo_identificacion ?? 'No aplica'}
                      label={'Tipo de Identificacion'}
                      width={'w-1/2'}
                    />
                    <CustomField
                      type={'text'}
                      name={'numero_identificacion'}
                      value={deudor?.persona?.num_identificacion ?? 'No aplica'}
                      label={'Número de Identificacion'}
                      width={'w-1/2'}
                    />
                  </div>

                  <div className="flex">
                    <div className="w-1/2 flex flex-wrap">
                      <CustomField
                        type={'text'}
                        name={'primer_nombre'}
                        value={deudor?.persona?.primer_nombre ?? ''}
                        label={'Primer Nombre'}
                        width={'w-1/2'}
                      />

                      <CustomField
                        type={'text'}
                        name={'segundo_nombre'}
                        value={deudor?.persona?.segundo_nombre ?? ''}
                        label={'Segundo Nombre'}
                        width={'w-1/2'}
                      />

                      <CustomField
                        type={'text'}
                        name={'primer_apellido'}
                        value={deudor?.persona?.primer_apellido ?? ''}
                        label={'Primer apellido'}
                        width={'w-1/2'}
                      />

                      <CustomField
                        type={'text'}
                        name={'segundo_apellido'}
                        value={deudor?.persona?.segundo_apellido ?? ''}
                        label={'Segundo apellido'}
                        width={'w-1/2'}
                      />
                    </div>
                    <div className="flex items-center justify-center w-1/2">
                      <CustomField
                        type={'date'}
                        name={'fecha_nacimiento'}
                        value={deudor?.persona?.fecha_nacimiento ?? ''}
                        label={'Fecha Nacimiento (mm-dd-yyyy)'}
                        cName="border-none"
                      />
                    </div>
                  </div>

                  <section className="p-2 border">
                    <div className="flex flex-wrap">
                      <CustomField
                        type={'text'}
                        name={'Sexo'}
                        value={deudor?.var_poblacional?.sexo ?? ''}
                        label={'Sexo'}
                        width={'w-1/3'}
                      />
                      <CustomField
                        type={'text'}
                        name={'orientacion_sexual'}
                        value={deudor?.var_poblacional?.orientacion_sexual ?? ''}
                        label={'Orientacion sexual'}
                        width={'w-1/3'}
                      />
                      <CustomField
                        type={'text'}
                        name={'etnia'}
                        value={deudor?.var_poblacional?.etnia ?? ''}
                        label={'Etnia'}
                        width={'w-1/3'}
                      />
                    </div>
                    <div className="flex flex-wrap">
                      <CustomField
                        type={'text'}
                        name={'discapacidad'}
                        value={deudor?.var_poblacional?.discapacidad ?? ''}
                        label={'Discapacidad Física'}
                        width={'w-1/3'}
                      />

                      <CustomField
                        type={'text'}
                        name={'victima'}
                        value={deudor?.var_poblacional?.victima ?? ''}
                        label={'Victima del conflicto'}
                        width={'w-1/3'}
                      />

                      <CustomField
                        type={'text'}
                        name={'poblacion_campesina'}
                        value={deudor?.var_poblacional?.poblacion_campesina ?? ''}
                        label={'Poblacion campesina'}
                        width={'w-1/3'}
                      />
                    </div>
                    <div className="flex flex-wrap">
                      <CustomField
                        type={'text'}
                        name={'estado_civil'}
                        value={deudor?.var_poblacional?.estado_civil ?? ''}
                        label={'Estado Civíl'}
                        width={'w-1/3'}
                      />
                      <CustomField
                        type={'text'}
                        name={'nivel_escolaridad'}
                        value={deudor?.var_poblacional?.nivel_escolaridad ?? ''}
                        label={'Nivel de escolaridad'}
                        width={'w-1/3'}
                      />

                      <CustomField
                        type={'text'}
                        name={'rol_hogar'}
                        value={deudor?.var_poblacional?.rol_hogar ?? ''}
                        label={'Rol en el hogar'}
                        width={'w-1/3'}
                      />
                    </div>
                  </section>
                </SeccionFormulario>
              </div>

              <div className="paginaTres">
                <SeccionFormulario seccion="Información de contacto del ciudadano">
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'vivienda'}
                      value={deudor?.contacto?.vivienda ?? ''}
                      label={'Vivienda'}
                      width={'w-1/3'}
                    />

                    {deudor?.contacto?.nombre_arrendador ? (
                      <React.Fragment>
                        <CustomField
                          type={'text'}
                          name={'nombre_arrendador'}
                          value={deudor?.contacto?.nombre_arrendador ?? ''}
                          label={'Nombre Arrendador'}
                          width={'w-1/3'}
                        />

                        <CustomField
                          type={'text'}
                          name={'telefono_arrendador'}
                          value={deudor?.contacto?.telefono_arrendador ?? ''}
                          label={'Teléfono Arrendador'}
                          width={'w-1/3'}
                        />
                      </React.Fragment>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'direccion'}
                      value={deudor?.contacto?.direccion ?? ''}
                      label={'Dirección'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'estrato'}
                      value={deudor?.contacto?.estrato ?? ''}
                      label={'Estrato'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'barrio_vereda'}
                      value={deudor?.contacto?.barrio_vereda ?? ''}
                      label={'Barrio o vereda'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'comuna'}
                      value={deudor?.contacto?.comuna ?? ''}
                      label={'Comuna'}
                      width={'w-1/2'}
                    />
                  </div>

                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'telefono'}
                      value={deudor?.contacto?.telefono ?? ''}
                      label={'Teléfono'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'correo'}
                      value={deudor?.contacto?.correo ?? ''}
                      label={'Correo'}
                      width={'w-1/3'}
                    />
                  </div>
                </SeccionFormulario>

                <SeccionFormulario seccion="Informacion del negocio">
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'nombre_negocio'}
                      value={deudor?.negocio?.nombre_negocio ?? ''}
                      label={'Nombre del negocio'}
                      width={'w-1/2'}
                    />
                    <CustomField
                      type={'text'}
                      name={'direccion'}
                      value={deudor?.negocio?.direccion ?? ''}
                      label={'Dirección'}
                      width={'w-1/2'}
                    />
                    <CustomField
                      type={'text'}
                      name={'comuna'}
                      value={deudor?.negocio?.comuna ?? ''}
                      label={'Comuna'}
                      width={'w-1/2'}
                    />
                  </div>

                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'telefono'}
                      value={deudor?.negocio?.telefono ?? ''}
                      label={'Teléfono'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'tipo_persona'}
                      value={deudor?.negocio?.tipo_persona ?? ''}
                      label={'Tipo persona'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'numero_empleados permanentes'}
                      value={deudor?.negocio?.num_empl_permanentes ?? ''}
                      label={'Numero de empleados permanentes'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'numero_empleados eventuales'}
                      value={deudor?.negocio?.num_empl_eventuales ?? ''}
                      label={'Numero de empleados eventuales'}
                      width={'w-1/2'}
                    />
                  </div>

                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'local'}
                      value={deudor?.negocio?.local ?? ''}
                      label={'Local'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'macrosector'}
                      value={deudor?.negocio?.macrosector ?? ''}
                      label={'Macrosector'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'subsector'}
                      value={deudor?.negocio?.subsector ?? ''}
                      label={'Subsector'}
                      width={'w-1/3'}
                    />
                  </div>

                  {deudor?.negocio?.nombre_arrendador ? (
                    <React.Fragment>
                      <CustomField
                        type={'text'}
                        name={'nombre_arrendador'}
                        value={deudor?.negocio?.nombre_arrendador ?? ''}
                        label={'Nombre Arrendador'}
                      />

                      <CustomField
                        type={'text'}
                        name={'telefono_arrendador'}
                        value={deudor?.negocio?.telefono_arrendador ?? ''}
                        label={'Teléfono Arrendador'}
                      />
                    </React.Fragment>
                  ) : null}
                </SeccionFormulario>
              </div>

              <div className="paginaCuatro">
                <SeccionFormulario seccion="Referencias comerciales y familiares">
                  {deudor.referencias.map((ref, index) => {
                    return (
                      <React.Fragment key={index}>
                        <h1 className="text-center my-2 border max-w-max mx-auto px-4 py-2">{` Referencia ${
                          index + 1
                        } `}</h1>
                        <div className="flex flex-wrap">
                          <CustomField
                            type={'text'}
                            name={'tipo'}
                            value={ref.tipo}
                            label={'Tipo'}
                            width={'w-1/2'}
                          />

                          <CustomField
                            type={'text'}
                            name={'nombre'}
                            value={ref.nombre}
                            label={'Nombres'}
                            width={'w-1/2'}
                          />

                          <CustomField
                            type={'text'}
                            name={'telefono'}
                            value={ref.telefono}
                            label={'Teléfono'}
                            width={'w-1/2'}
                          />
                          <CustomField
                            type={'text'}
                            name={'parentesco'}
                            value={ref.parentesco}
                            label={'Parentesco'}
                            width={'w-1/2'}
                          />
                        </div>
                      </React.Fragment>
                    )
                  })}
                </SeccionFormulario>
                <SeccionFormulario seccion="Informe financiero del solicitante">
                  <div className="flex flex-wrap">
                    <CustomField 
                      type={'text'}
                      name={'experiencia_crediticia'}
                      value={deudor?.informe_financiero?.experiencia_crediticia ? 'Si' : 'No'}
                      label={'Experiencia crediticia'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'tiene_credito_vigente'}
                      value={deudor?.informe_financiero?.tiene_credito_vigente ? 'Si' : 'No'}
                      label={'¿Usted tiene créditos actualmente?'}
                      width={'w-1/2'}
                    />
                  </div>

                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'entidad'}
                      value={deudor?.informe_financiero?.entidad ?? ''}
                      label={'Entidad'}
                      width={'w-1/3'}
                    />

                    <CustomField
                      type={'text'}
                      name={'monto_total'}
                      value={separadorMillares(deudor?.informe_financiero?.monto_total) ?? ''}
                      label={'Monto total'}
                      width={'w-1/3'}
                    />

                    <CustomField
                      type={'text'}
                      name={'valor_adeudado'}
                      value={
                        separadorMillares(deudor?.informe_financiero?.valor_adeudado) ?? ''
                      }
                      label={'Valor adeudado'}
                      width={'w-1/3'}
                    />
                  </div>
                </SeccionFormulario>
              </div>

              <div className="paginaCinco">
                <SeccionFormulario seccion="Aprobación final">
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'monto_sugerido'}
                      label={'Monto Sugerido'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'monto_aprobado'}
                      label={'Monto aprobado'}
                      width={'w-1/3'}
                    />

                    <CustomField type={'text'} name={'tasa'} label={'Tasa'} width={'w-1/3'} />
                  </div>

                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'firma_analista'}
                      label={'Firma Analista'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'firma_coordinador'}
                      label={'Firma Coordinador'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'firma_director'}
                      label={'Firma Director'}
                      width={'w-1/3'}
                    />
                  </div>
                </SeccionFormulario>

                <SeccionFormulario>
                  <p className="text-xs">
                    Certifico bajo la gravedad de juramento que los anteriores datos son ciertos
                    y autorizo de manera permanente e irrevocable a los operadores y al
                    municipio de Medellín obtener, consultar y reportar a las centrales de
                    información, a la Asociación Bancaria de Colombia, Datacrédito y demás
                    entidades autorizadas para tales efectos la información relacionada con mi
                    comportamiento crediticio, resultado de toda clase de operaciones que
                    efectúe o haya efectuado con entidades del sector financiero y otros
                    sectores y que en general sirvan para determinar el análisis del crédito
                    solicitado. Declaro que esta solicitud es exacta en todas sus partes y en
                    caso de comprobarse alguna inexactitud, será causal de rechazo. Así mismo
                    autorizo a los operadores y al municipio de Medellín para destruir mi
                    información financiera y comercial en un plazo de 6O días en caso que no sea
                    aprobada la presente solicitud de crédito
                  </p>

                  <div className="flex flex-wrap my-4">
                    <CustomField
                      type={'text'}
                      name={'firma_solicitante'}
                      label={'Firma Solicitante'}
                      width={'w-1/2'}
                    />
                    <CustomField
                      type={'text'}
                      name={'cedula_solicitante'}
                      label={'Cédula Solicitante'}
                      width={'w-1/2'}
                    />
                  </div>
                </SeccionFormulario>
                <SeccionFormulario>
                  <ul className="my-4">
                    <li className="text-justify text-xs">
                      El beneficiario de un microcrédito estará obligado a destinar los recursos
                      recibidos en mutuo, para el financiamiento de inventario, capital de
                      trabajo y activos fijos de nuevos proyectos económicos productivos,
                      comerciales o de prestación de servicios, o para el fortalecimiento de
                      negocios existentes y que la actividad productiva cumpla con los
                      requisitos legales establecidos para su desarrollo; así como para el
                      financiamiento para gastos propios y/o familiares derivados de la
                      ejecución de proyectos con destinación específica. <br />
                      Lo anterior se exceptúa, si los recursos recibidos obedecen a la ejecución
                      de un proyecto específico adelantado por el programa “Banco de los
                      Pobres”.
                    </li>
                  </ul>

                  <ul className="border rounded-lg text-sm p-4">
                    Se exigirá el pago total de la obligación en cualquiera de los siguientes
                    eventos, según lo establece el reglamento de funcio namiento del Banco.
                    <br />
                    Cuando se compruebe el cambio total o parcial de la destinación del
                    microcrédito.
                    <br />
                    Cuando se considere que se ha desmejorado la garantía otorgada.
                    <br />
                    Cuando se incumplan cualquiera de las obligaciones contenidas en el
                    reglamento de funcionamiento del Banco.
                    <br />
                    Cu ando se compruebe que el titular del crédito ya no reside en el municipio
                    de Medellín.
                  </ul>
                </SeccionFormulario>
                <div className="bg-color_primary_1 flex pagina-cinco">
                  <img
                    src={`${process.env.NEXT_BASE_PATH}/LogoBanco.svg`} 
                    alt="logo-banco"
                    className="border rounded-r-[10px]  bg-white py-6 w-36"
                  />
                  <div className="text-white font-semibold flex flex-col w-full justify-center items-center"></div>
                </div>
              </div>
            </React.Fragment>
          ),
        )}
      </div>
    </>
  ) : (
    'No hay datos para mostrar, intentalo más tarde'
  )
}

export default ReporteDeudor
