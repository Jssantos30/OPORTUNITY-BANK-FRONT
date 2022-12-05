const classInput = 'h-10 border border-gray-400 px-4'

export const DataPopulationVariables = [
  {
    id: '83-a.b',
    name: 'sexo',
    fieldName: 'Sexo',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 83.2,
        name: 'Masculino',
        fieldName: 'Masculino',
      },
      {
        id: 83.3,
        name: 'Femenino',
        fieldName: 'Femenino',
      },
      {
        id: 83.4,
        name: 'Intersexual',
        fieldName: 'Intersexual',
      },
      {
        id: 83.5,
        name: 'Indefinido',
        fieldName: 'Indefinido',
      },
    ],
  },
  // {
  //   id: 524,
  //   name: 'orientacion_sexual',
  //   fieldName: 'Orientación sexual',
  //   type: 'select',
  //   className: `${classInput}`,
  //   options: [

  //     {
  //       id: 524.3,
  //       name: 'Heterosexual',
  //       fieldName: 'Heterosexual',
  //     },
  //     {
  //       id: 524.1,
  //       name: 'Lesbiana',
  //       fieldName: 'Lesbiana',
  //     },
  //     {
  //       id: 524.2,
  //       name: 'Bisexual',
  //       fieldName: 'Bisexual',
  //     },
  //     {
  //       id: 524.2,
  //       name: 'Gay',
  //       fieldName: 'Gay',
  //     },
  //     {
  //       id: 524.2,
  //       name: 'Asexual',
  //       fieldName: 'Asexual',
  //     },
  //     {
  //       id: 524.2,
  //       name: 'Pansexual',
  //       fieldName: 'Pansexual',
  //     },
  //     {
  //       id: 524.2,
  //       name: 'Homosexual',
  //       fieldName: 'Homosexual',
  //     },
  //     {
  //       id: 524.2,
  //       name: 'Sin Dato',
  //       fieldName: 'Sin Dato',
  //     },
  //     {
  //       id: 524.2,
  //       name: 'No sabe No responde',
  //       fieldName: 'No sabe No responde',
  //     },
  //   ],
  // },
  {
    id: 'identidad-genero-525',
    name: 'identidad_genero',
    fieldName: 'Identidad de genero',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 'identidad-genero-525.1',
        name: 'Mujer Trans',
        fieldName: 'Mujer Trans',
      },
      {
        id: 'identidad-genero-525.2',
        name: 'Hombre Trans',
        fieldName: 'Hombre Trans',
      },
      {
        id: 'identidad-genero-525.3',
        name: 'Fluido-No Binario',
        fieldName: 'Fluido-No Binario',
      },
      {
        id: 'identidad-genero-525.4',
        name: 'Mujer Cis',
        fieldName: 'Mujer Cis',
      },
      {
        id: 'identidad-genero-525.5',
        name: 'Hombre Cis',
        fieldName: 'Hombre Cis',
      },
      {
        id: 'identidad-genero-525.6',
        name: 'Travesti',
        fieldName: 'Travesti',
      },
      {
        id: 'identidad-genero-525.7',
        name: 'Transexual',
        fieldName: 'Transexual',
      },
      {
        id: 'identidad-genero-525.8',
        name: 'Transformista',
        fieldName: 'Transformista',
      },
      {
        id: 'identidad-genero-525.9',
        name: 'Otro',
        fieldName: 'Otro',
      },
      {
        id: 'identidad-genero-525.10',
        name: 'Sin Dato',
        fieldName: 'Sin Dato',
      },
      {
        id: 'identidad-genero-525.10',
        name: 'No sabe No responde',
        fieldName: 'No sabe No responde',
      },
    ],
  },
  {
    id: 86,
    name: 'estado_civil',
    fieldName: 'Estado Civíl',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 86.1,
        name: 'Soltero',
        fieldName: 'Soltero(a)',
      },
      {
        id: 86.2,
        name: 'Casado',
        fieldName: 'Casado(a)',
      },
      {
        id: 86.3,
        name: 'Viudo',
        fieldName: 'Viudo(a)',
      },
      {
        id: 86.4,
        name: 'Union Libre',
        fieldName: 'Unión libre',
      },
      {
        id: 86.5,
        name: 'Divorciado',
        fieldName: 'Divorciado(a)',
      },
    ],
  },

  {
    id: 88,
    name: 'nivel_escolaridad',
    fieldName: 'Nivel de escolaridad',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 88.1,
        name: 'Ninguno',
        fieldName: 'Ninguno',
      },
      {
        id: 88.2,
        name: 'Primaria',
        fieldName: 'Primaria',
      },
      {
        id: 88.3,
        name: 'Bachiller',
        fieldName: 'Bachiller',
      },
      {
        id: 88.4,
        name: 'Tecnico',
        fieldName: 'Técnico',
      },
      {
        id: 88.5,
        name: 'Tecnologo',
        fieldName: 'Tecnólogo',
      },
      {
        id: 88.6,
        name: 'Profesional',
        fieldName: 'Profesional',
      },
      {
        id: 88.7,
        name: 'Especialista',
        fieldName: 'Especialista',
      },
      {
        id: 88.8,
        name: 'Magister',
        fieldName: 'Magister',
      },
      {
        id: 88.9,
        name: 'Doctorado',
        fieldName: 'Doctorado',
      },
    ],
  },

  {
    id: 87,
    name: 'personas_a_cargo',
    fieldName: 'Numero de personas a cargo',
    type: 'number',
    className: `${classInput}`,
  },

  {
    id: 89,
    name: 'estado_laboral',
    fieldName: 'Estado Laboral',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 89.1,
        name: 'Empleado',
        fieldName: 'Empleado',
      },
      {
        id: 89.2,
        name: 'Desempleado',
        fieldName: 'Desempleado',
      },
    ],
  },
]
