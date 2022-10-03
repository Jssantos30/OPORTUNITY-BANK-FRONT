const classInput = 'h-10 border border-gray-400 px-4 '

export const dataPopulationVariables = [
  {
    id: 23,
    name: 'sexo',
    fieldName: 'Sexo',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 23.1,
        name: 'Masculino',
        fieldName: 'Masculino',
      },
      {
        id: 23.2,
        name: 'Femenino',
        fieldName: 'Femenino',
      },
      {
        id: 23.3,
        name: 'Intersexual',
        fieldName: 'Intersexual',
      },
      {
        id: 23.4,
        name: 'Indefinido',
        fieldName: 'Indefinido',
      },
    ],
  },
  {
    id: 24,
    name: 'orientacion_sexual',
    fieldName: 'Orientación sexual',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 24.3,
        name: 'Heterosexual',
        fieldName: 'Heterosexual',
      },
      {
        id: 24.1,
        name: 'Lesbiana',
        fieldName: 'Lesbiana',
      },
      {
        id: 24.2,
        name: 'Bisexual',
        fieldName: 'Bisexual',
      },
      {
        id: 24.2,
        name: 'Gay',
        fieldName: 'Gay',
      },
      {
        id: 24.2,
        name: 'Asexual',
        fieldName: 'Asexual',
      },
      {
        id: 24.2,
        name: 'Pansexual',
        fieldName: 'Pansexual',
      },
      {
        id: 24.2,
        name: 'Homosexual',
        fieldName: 'Homosexual',
      },
      {
        id: 24.2,
        name: 'Sin Dato',
        fieldName: 'Sin Dato',
      },
      {
        id: 24.2,
        name: 'No sabe No responde',
        fieldName: 'No sabe No responde',
      },
    ],
  },
  {
    id: 'identidad-genero-25',
    name: 'identidad_genero',
    fieldName: 'Identidad de genero',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 'identidad-genero-25.1',
        name: 'Mujer Trans',
        fieldName: 'Mujer Trans',
      },
      {
        id: 'identidad-genero-25.2',
        name: 'Hombre Trans',
        fieldName: 'Hombre Trans',
      },
      {
        id: 'identidad-genero-25.3',
        name: 'Fluido-No Binario',
        fieldName: 'Fluido-No Binario',
      },
      {
        id: 'identidad-genero-25.4',
        name: 'Mujer Cis',
        fieldName: 'Mujer Cis',
      },
      {
        id: 'identidad-genero-25.5',
        name: 'Hombre Cis',
        fieldName: 'Hombre Cis',
      },
      {
        id: 'identidad-genero-25.6',
        name: 'Travesti',
        fieldName: 'Travesti',
      },
      {
        id: 'identidad-genero-25.7',
        name: 'Transexual',
        fieldName: 'Transexual',
      },
      {
        id: 'identidad-genero-25.8',
        name: 'Transformista',
        fieldName: 'Transformista',
      },
      {
        id: 'identidad-genero-25.9',
        name: 'Otro',
        fieldName: 'Otro',
      },
      {
        id: 'identidad-genero-25.10',
        name: 'Sin Dato',
        fieldName: 'Sin Dato',
      },
      {
        id: 'identidad-genero-25.10',
        name: 'No sabe No responde',
        fieldName: 'No sabe No responde',
      },
    ],
  },
  {
    id: 25,
    name: 'etnia',
    fieldName: 'Etnia',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 25.1,
        name: 'Afrocolombiano',
        fieldName: 'AfroColombiano',
      },
      {
        id: 25.2,
        name: 'Indigena',
        fieldName: 'Indígena',
      },
      {
        id: 25.3,
        name: 'Palenquero',
        fieldName: 'Palenquero',
      },
      {
        id: 25.4,
        name: 'Raizal',
        fieldName: 'Raizal',
      },
      {
        id: 25.4,
        name: 'ROM-GITANO',
        fieldName: 'ROM-GITANO',
      },
      {
        id: 25.4,
        name: 'Negro',
        fieldName: 'Negro',
      },
      {
        id: 25.4,
        name: 'Ninguno',
        fieldName: 'Ninguno',
      },
    ],
  },

  {
    id: 26,
    name: 'discapacidad',
    fieldName: 'Discapacidad',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 26.1,
        name: 'Discapacidad Auditiva',
        fieldName: 'Discapacidad Auditiva',
      },
      {
        id: 26.2,
        name: 'Discapacidad Cognitiva',
        fieldName: 'Discapacidad Cognitiva',
      },
      {
        id: 26.3,
        name: 'Discapacidad Fisica',
        fieldName: 'Discapacidad Fisica',
      },
      {
        id: 26.4,
        name: 'Discapacidad Mental',
        fieldName: 'Discapacidad Mental',
      },
      {
        id: 26.5,
        name: 'Discapacidad Visual',
        fieldName: 'Discapacidad Visual',
      },
      {
        id: 26.6,
        name: 'Discapacidad Multiple',
        fieldName: 'Discapacidad Multiple',
      },
      {
        id: 26.7,
        name: 'No tiene Discapacidad',
        fieldName: 'No tiene Discapacidad',
      },
    ],
  },
  {
    id: 27,
    name: 'victima',
    fieldName: 'Víctima de conflicto',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 27.1,
        name: 'SI',
        fieldName: 'SI',
      },
      {
        id: 27.2,
        name: 'NO',
        fieldName: 'NO',
      },
    ],
  },
  {
    id: 28,
    name: 'poblacion_campesina',
    fieldName: 'Población campesina',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 28.1,
        name: 'SI',
        fieldName: 'SI',
      },
      {
        id: 28.2,
        name: 'NO',
        fieldName: 'NO',
      },
    ],
  },
  {
    id: 29,
    name: 'estado_civil',
    fieldName: 'Estado Civíl',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 29.1,
        name: 'Soltero',
        fieldName: 'Soltero',
      },
      {
        id: 29.2,
        name: 'Casado',
        fieldName: 'Casado',
      },
      {
        id: 29.3,
        name: 'Viudo',
        fieldName: 'Viudo',
      },
      {
        id: 29.4,
        name: 'Union Libre',
        fieldName: 'Unión libre',
      },
      {
        id: 29.5,
        name: 'Divorciado',
        fieldName: 'Divorciado',
      },
    ],
  },
  {
    id: 30,
    name: 'nivel_escolaridad',
    fieldName: 'Nivel de escolaridad',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 30.1,
        name: 'Ninguno',
        fieldName: 'Ninguno',
      },
      {
        id: 30.2,
        name: 'Primaria',
        fieldName: 'Primaria',
      },
      {
        id: 30.3,
        name: 'Bachiller',
        fieldName: 'Bachiller',
      },
      {
        id: 30.4,
        name: 'Tecnico',
        fieldName: 'Técnico',
      },
      {
        id: 30.5,
        name: 'Tecnologo',
        fieldName: 'Tecnólogo',
      },
      {
        id: 30.6,
        name: 'Profesional',
        fieldName: 'Profesional',
      },
      {
        id: 30.7,
        name: 'Especialista',
        fieldName: 'Especialista',
      },
    ],
  },
  {
    id: 31,
    name: 'rol_hogar',
    fieldName: 'Rol en el hogar',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 31.1,
        name: 'Cabeza Hogar',
        fieldName: 'Cabeza de Hogar',
      },
      {
        id: 31.2,
        name: 'Aporta economicamente',
        fieldName: 'Aporta economicamente',
      },
      {
        id: 31.3,
        name: 'No aporta',
        fieldName: 'No aporta ',
      },
    ],
  },
]
