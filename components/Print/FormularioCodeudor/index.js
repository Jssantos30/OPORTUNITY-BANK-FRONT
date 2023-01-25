import * as React from 'react'
import { customFetch, RequestTypes } from '../../../utils/custom-fetch'
import CustomField from '../CustomField'
import SeccionFormulario from '../SeccionFormulario'
import TableIncome from '../TableIncome'

function ReporteCodeudor({ estadoCompletoSolicitud, setEstadoCompletoSolicitud, query }) {
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
      } catch (err) { }
    }
    run()
  }, [query])

  return estadoCompletoSolicitud.loading ? (
    <div>Cargando</div>
  ) : estadoCompletoSolicitud.data.length > 0 ? (
    <>
      <div className={`max-w-2xl `} mx-auto id="capture">
        {estadoCompletoSolicitud.data.map(({ id, codeudor }) => (
          <React.Fragment key={id}>
            <div className="paginaUno">
              <header className="my-2">
                <div>
                  <label className="flex justify-end text-color_primary_1 ">{`Número de Solicitud : ${id}`}</label>
                </div>
                <div className="bg-color_primary_2_dark flex">
                  <img
                    src={`${process.env.NEXT_BASE_PATH}/LogoBanco.svg`}
                    alt="logo-banco"
                    className="border rounded-r-[10px]  bg-white py-6 w-36"
                  />
                  <div className="text-white font-semibold flex flex-col w-full justify-center items-center">
                    <h1 className="text-3xl">Solicitudes de Crédito Codeudor</h1>
                    <h2 className="text-base">Este formulario es gratuito</h2>
                    <h3>FO-DESE-316 v1</h3>
                  </div>
                </div>
              </header>

              <SeccionFormulario seccion="Información básica" bg={'bg-color_primary_2_dark'}>
                <div className="flex flex-wrap">
                  <CustomField
                    type={'text'}
                    name={'tipo_identificacion'}
                    value={codeudor?.persona?.tipo_identificacion ?? 'No aplica'}
                    label={'Tipo de Identificacion'}
                    width={'w-1/3'}
                  />
                  <CustomField
                    type={'text'}
                    name={'numero_identificacion'}
                    value={codeudor?.persona?.num_identificacion ?? 'No aplica'}
                    label={'Número de Identificacion'}
                    width={'w-1/3'}
                  />
                  <CustomField
                    type={'text'}
                    name={'genero'}
                    value={codeudor?.var_poblacional?.sexo ?? ''}
                    label={'Sexo'}
                    width={'w-1/3'}
                  />
                </div>
                <div className="flex flex-wrap">
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'primer_nombre'}
                      value={codeudor?.persona?.primer_nombre ?? ''}
                      label={'Primer Nombre'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'segundo_nombre'}
                      value={codeudor?.persona?.segundo_nombre ?? ''}
                      label={'Segundo Nombre'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'primer_apellido'}
                      value={codeudor?.persona?.primer_apellido ?? ''}
                      label={'Primer apellido'}
                      width={'w-1/2'}
                    />

                    <CustomField
                      type={'text'}
                      name={'segundo_apellido'}
                      value={codeudor?.persona?.segundo_apellido ?? ''}
                      label={'Segundo apellido'}
                      width={'w-1/2'}
                    />
                  </div>
                  <div className="flex items-center justify-center w-1/2">
                    <CustomField
                      type={'date'}
                      name={'fecha_nacimiento'}
                      value={codeudor?.persona?.fecha_nacimiento ?? ''}
                      label={'Fecha Nacimiento (mm-dd-yyyy)'}
                      cName="border-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <CustomField
                    type={'text'}
                    name={'vivienda'}
                    value={codeudor?.contacto?.vivienda ?? ''}
                    label={'Vivienda'}
                    width={'w-1/3'}
                  />

                  {codeudor?.contacto?.nombre_arrendador ? (
                    <React.Fragment>
                      <CustomField
                        type={'text'}
                        name={'nombre_arrendador'}
                        value={codeudor?.contacto?.nombre_arrendador ?? ''}
                        label={'Nombre Arrendador'}
                        width={'w-1/3'}
                      />

                      <CustomField
                        type={'text'}
                        name={'telefono_arrendador'}
                        value={codeudor?.contacto?.telefono_arrendador ?? ''}
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
                    value={codeudor?.contacto?.direccion ?? ''}
                    label={'Dirección'}
                    width={'w-1/2'}
                  />

                  <CustomField
                    type={'text'}
                    name={'estrato'}
                    value={codeudor?.contacto?.estrato ?? ''}
                    label={'Estrato'}
                    width={'w-1/2'}
                  />

                  <CustomField
                    type={'text'}
                    name={'barrio_vereda'}
                    value={codeudor?.contacto?.barrio_vereda ?? ''}
                    label={'Barrio o vereda'}
                    width={'w-1/2'}
                  />

                  <CustomField
                    type={'text'}
                    name={'comuna'}
                    value={codeudor?.contacto?.comuna ?? ''}
                    label={'Comuna'}
                    width={'w-1/2'}
                  />
                </div>

                <div className="flex flex-wrap">
                  <CustomField
                    type={'text'}
                    name={'telefono'}
                    value={codeudor?.contacto?.telefono ?? ''}
                    label={'Teléfono'}
                    width={'w-1/3'}
                  />
                  <CustomField
                    type={'text'}
                    name={'correo'}
                    value={codeudor?.contacto?.correo ?? ''}
                    label={'Correo'}
                    width={'w-1/3'}
                  />
                </div>

                <div>
                  <h1 className="font-semibold">Datos del conyugue</h1>
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'numero_identificacion_conyugue'}
                      value={codeudor?.conyugue?.num_identificacion ?? ''}
                      label={'Numero de identificación'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'nombre_conyugue'}
                      value={codeudor?.conyugue?.nombre ?? ''}
                      label={'Nombre de conyugue'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'telefono_conyugue'}
                      value={codeudor?.conyugue?.telefono ?? ''}
                      label={'Teléfono conyugue'}
                      width={'w-1/3'}
                    />
                  </div>

                  <CustomField
                    type={'text'}
                    name={'sexo_conyugue'}
                    value={codeudor?.conyugue?.sexo ?? ''}
                    label={'Sexo conyugue'}
                    width={'w-1/3'}
                  />
                  <div className="flex flex-wrap">
                    <CustomField
                      type={'text'}
                      name={'lugar_trabajo_conyugue'}
                      value={codeudor?.conyugue?.lugar_trabajo ?? ''}
                      label={'Lugar de trabajo'}
                      width={'w-1/3'}
                    />
                    <CustomField
                      type={'text'}
                      name={'telefono_trabajo'}
                      value={codeudor?.conyugue?.telefono_trabajo ?? ''}
                      label={'Teléfono trabajo conyugue'}
                      width={'w-1/3'}
                    />
                  </div>
                </div>
              </SeccionFormulario>

              <SeccionFormulario
                seccion="Variables poblacionales"
                bg={'bg-color_primary_2_dark'}
              >
                <div className="flex flex-wrap">
                  <CustomField
                    type={'text'}
                    name={'estado_civil'}
                    value={codeudor?.var_poblacional?.estado_civil ?? ''}
                    label={'Estado Civíl'}
                    width={'w-1/3'}
                  />

                  <CustomField
                    type={'text'}
                    name={'personas_a_cargo'}
                    value={codeudor?.var_poblacional?.personas_a_cargo ?? ''}
                    label={'Personas a cargo'}
                    width={'w-1/3'}
                  />

                  <CustomField
                    type={'text'}
                    name={'nivel_escolaridad'}
                    value={codeudor?.var_poblacional?.nivel_escolaridad ?? ''}
                    label={'Nivel de escolaridad'}
                    width={'w-1/3'}
                  />
                </div>

                <div className="flex flex-wrap">
                  <CustomField
                    type={'text'}
                    name={'estado_laboral'}
                    value={codeudor?.var_poblacional?.estado_laboral ?? ''}
                    label={'Estado laboral'}
                    width={'w-1/3'}
                  />
                  {codeudor?.var_poblacional?.estado_laboral === 'Empleado' ? (
                    <React.Fragment>
                      <CustomField
                        type={'text'}
                        name={'nombre_empresa'}
                        value={codeudor?.var_poblacional?.nombre_empresa ?? ''}
                        label={'Nombre empresa'}
                        width={'w-1/3'}
                      />

                      <CustomField
                        type={'text'}
                        name={'direccion_empresa'}
                        value={codeudor?.var_poblacional?.direccion_empresa ?? ''}
                        label={'Dirección empresa'}
                        width={'w-1/3'}
                      />

                      <CustomField
                        type={'text'}
                        name={'telefono_empresa'}
                        value={codeudor?.var_poblacional?.telefono_empresa ?? ''}
                        label={'Teléfono empresa'}
                        width={'w-1/3'}
                      />
                    </React.Fragment>
                  ) : null}
                </div>
              </SeccionFormulario>

              <SeccionFormulario
                seccion="Ingresos mensuales personales"
                bg={'bg-color_primary_2_dark'}
              >
                <TableIncome ingresos={codeudor.ingresos} egresos={codeudor.egresos} />
              </SeccionFormulario>

              <SeccionFormulario
                seccion="Informacion bienes raíces"
                bg={'bg-color_primary_2_dark'}
              >
                <div className="flex flex-wrap">
                  <CustomField
                    type={'text'}
                    name={'nivel_escolaridad'}
                    value={codeudor?.bien_raiz?.activos_propios ?? ''}
                    label={'Acivo casa'}
                    width={'w-1/4'}
                  />
                  <CustomField
                    type={'text'}
                    name={'nivel_escolaridad'}
                    value={codeudor?.bien_raiz?.num_escritura ?? ''}
                    label={'No. escritura'}
                    width={'w-1/4'}
                  />
                  <CustomField
                    type={'text'}
                    name={'nivel_escolaridad'}
                    value={codeudor?.bien_raiz?.matricula ?? ''}
                    label={'Matriculas'}
                    width={'w-1/4'}
                  />
                  <CustomField
                    type={'text'}
                    name={'nivel_escolaridad'}
                    value={codeudor?.bien_raiz?.avaluo_catastral ?? ''}
                    label={'Avalúo catastral'}
                    width={'w-1/4'}
                  />
                </div>
              </SeccionFormulario>
            </div>

            <div id="pag-dos">
              <SeccionFormulario
                seccion="Referencias personales"
                bg={'bg-color_primary_2_dark'}
              >
                {codeudor.referencias
                  ? codeudor?.referencias.map((ref, index) => {
                    return (
                      <React.Fragment key={index}>
                        <h1 className="text-center my-2 border max-w-max mx-auto px-4 py-2">{` Referencia ${index + 1
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
                  })
                  : null}
              </SeccionFormulario>

              <SeccionFormulario
                seccion="Autorización para el tratamiento de datos personales"
                bg={'bg-color_primary_2_dark'}
              >
                <ul className="text-xs text-justify">
                  <li>
                    Por medio de la presente, manifiesto que autorizo al Municipio de Medellín
                    para el tratamiento de mis datos personales, bajo las condiciones que me son
                    informadas en los siguientes términos:
                  </li>
                  <li>
                    EL Municipio de Medellín, identificado con NIT No. 890.905.211-1, actuará
                    como Responsable del tratamiento de los datos, los que podrá recolectar,
                    usar y tratar conforme a su Política de Tratamiento de Datos Personales, que
                    está disponible en www.medellin.gov.co, la que se reserva el derecho de
                    modificar en cualquier momento, de lo cual informará a través de dicho sitio
                    web.
                  </li>
                  <li>
                    Entiendo que es de carácter facultativo responder preguntas que versen sobre
                    datos sensibles (aquellos que afectan mi intimidad) o de menores de edad. No
                    obstante, de proporcionarlos, estoy autorizando expresamente su Tratamiento.
                  </li>
                  <li>
                    Declaro que conozco mis derechos como titular, especialmente los de conocer,
                    actualizar, rectificar y suprimir mi información personal, consultar mi
                    información, solicitar prueba de esta autorización, así como el derecho a
                    revocar el consentimiento otorgado y que puedo ejercer mis derechos a través
                    de los canales dispuestos por el Municipio de Medellín, a saber, el portal
                    web www.medellin.gov.co, la Línea de Atención 4444144, en el Centro de
                    Servicios a la Ciudadanía, ubicado en la Calle 44 N 52 – 165 Centro
                    Administrativo la Alpujarra, o en una de sus sedes externas, es decir, Casas
                    de Gobierno, Mas cerca y Centros de Servicios al Ciudadano (pueden
                    consultarse en la Línea de Atención).
                  </li>
                  <p>
                    Así, autorizo de manera voluntaria, previa, explícita, informada e
                    inequívoca al Municipio de Medellín para tratar mis datos y para que la
                    información por mi suministrada sea incluida en las bases de datos de esta
                    entidad, para llevar a cabo acciones tendientes al cumplimiento de su objeto
                    misional y, específicamente, para el desarrollo del objetivo del Programa
                    Social Banco de los Pobres, fundamentalmente contribuir al mejoramiento de
                    la calidad de vida de los habitantes del Municipio de Medellín a través de
                    la concesión de microcréditos por medio de los cuales se financien proyectos
                    rentables y sostenibles en el tiempo, que permitan el desarrollo de
                    microempresas y la generación de empleo productivo, fortalecer la cultura de
                    la legalidad, brindar acompañamiento financiero y contribuir con el
                    desarrollo de los demás programas y proyectos de la Administración
                    Municipal. Igualmente autorizo para compartir mis datos personales con
                    terceros aliados o contratistas del Municipio de Medellín, con el objeto de
                    que le presten servicios a éste o en nombre de éste, o para la ejecución de
                    estrategias o programas conjuntos, así como con otras entidades del orden
                    departamental y nacional y, concretamente, con los operadores que ofrezcan,
                    administren y gestionen las líneas de crédito del Banco de los Pobres, o a
                    quien represente sus derechos u ostente la calidad de acreedor, a quienes
                    conjuntamente autorizo para que consulten, reporten, modifiquen, actualicen
                    y rectifiquen, mi información comercial, financiera y crediticia ante las
                    centrales de riesgo crediticio, o ante cualquier otra entidad que administre
                    bases de datos con los fines legalmente definidos para este tipo de
                    servicios. Declaro que la información suministrada es correcta, veraz,
                    verificable y actualizada, a la fecha de suscripción de la presente
                    autorización, y me comprometo a actualizarla inmediatamente en caso de
                    alguna modificación. Igualmente que esta solicitud es exacta en todas sus
                    partes y en caso de comprobarse alguna inexactitud será causal de rechazo;
                    así mismo declaro que he sido informado sobre las característi- cas,
                    tarifas, garantías, seguros y demás condiciones de los productos y/o
                    servicios que solicito y que podré consultarlas directamente ante la entidad
                    que ofrece el producto
                  </p>
                </ul>
                <br />

                <div className="flex flex-wrap">
                  <CustomField
                    type={'text'}
                    name={'firma_analista'}
                    label={'Firma Solicitante'}
                    width={'w-1/2'}
                  />
                  <CustomField
                    type={'text'}
                    name={'firma_coordinador'}
                    label={'Cédula de ciudadanía'}
                    width={'w-1/2'}
                  />
                </div>
              </SeccionFormulario>

              <SeccionFormulario seccion="Requisitos codeudor" bg={'bg-color_primary_2_dark'}>
                <ol className="text-xs text-justify">
                  <h1 className="font-semibold">codeudor:</h1>
                  <p>
                    El cual debe estar entre los 18 y 75 años y que resida en el territorio
                    nacional. Este codeudor no podrá presentar ningún tipo de mora o reporte en
                    las centrales de riesgo. El codeudor no podrá se codeudor de dos o más
                    personas en el Banco de los Pobres y tampoco pordrá solicitar crédito como
                    titular con el mismo.
                  </p>
                  <li>
                    {' '}
                    <span>Codeudor con contrato laboral:</span> Se aceptarán codeudores que
                    estén vinculados mediante contratos término indefinido, con un ingreso
                    mínimo de dos (2) SMLMV. Para acreditar lo anterior deberá presentar los
                    siguientes documentos:
                    <br />
                    <ul>
                      <li>Fotocopia ampliada de la cédula de ciudadanía al 200%</li>
                      <li>
                        Certificación laboral expedida por la empresa o entidad en donde labora,
                        especificando el tipo de vinculación y salario, no superior a (30) días
                        de expedición
                      </li>
                      <li>Copia de las dos últimas colillas de pago</li>Fotocopia ampliada de la
                      cédula de ciudadanía al 200%.
                    </ul>
                  </li>
                  <li>
                    <span> Codeudor con propiedad raíz:</span> <br />
                    <ul>
                      <li>
                        Certificado de tradición y libertad del inmueble. Este certificado no
                        debe tener más de (30) días de expedición. La propiedad raíz deberá
                        estar ubicada en el Departamento de Antioquia
                      </li>
                      <li>Fotocopia ampliada de la cédula de ciudadanía al 200%.</li>
                      <li>Fotocopia del recibo del impuesto predial.</li>
                      <li>
                        El inmueble no podrá tener Afectación a Vivienda Familiar, Patrimonio de
                        Familia o presentar Embargos.
                      </li>
                    </ul>
                  </li>
                </ol>

                <p className="border px-2 py-4 border-black rounded-lg my-4 text-sm">
                  <bold className="font-semibold">PÁRRAFO:</bold> Cuando el crédito sea superior
                  a 10 (diez) SMLMV, se requiere un codeudor que posea una propiedad raíz y su
                  avalúo catastral tenga un valor superior de diecisiete (17) SMLMV.
                </p>
              </SeccionFormulario>
              <div>
                <p className="text-center font-semibold">
                  Sótano del Centro Administrativo Municipal Calle 44 # 52-165
                </p>
                <p className="text-center font-semibold">
                  Teléfono: 385 55 55 ext. 5071 - 7353 - 5098 - 7349
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  ) : (
    'No hay datos para mostrar, intentalo más tarde'
  )
}

export default ReporteCodeudor
