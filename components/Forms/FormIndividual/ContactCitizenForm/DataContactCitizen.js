const classInput = 'h-10 border border-gray-400 px-4'
export const DataContactCitizenForm = [
  {
    id: 34,
    name: 'vivienda',
    fieldName: 'Vivienda',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 34.1,
        name: 'Propia',
        fieldName: 'Propia',
      },
      {
        id: 34.2,
        name: 'Familiar',
        fieldName: 'Familiar',
      },
      {
        id: 34.3,
        name: 'Arrendada',
        fieldName: 'Arrendada',
      },
    ],
  },
]

export const Datacontact = [
  {
    id: 35,
    name: 'direccion',
    fieldName: 'Dirección',
    type: 'text',
    className: `${classInput}`,
  },
  {
    id: 36,
    name: 'estrato',
    fieldName: 'Estrato',
    type: 'select',
    className: `${classInput}`,
    options: [
      {
        id: 1,
        name: 1,
        fieldName: 'Estrato 1',
      },
      {
        id: 2,
        name: 2,
        fieldName: 'Estrato 2',
      },
      {
        id: 3,
        name: 3,
        fieldName: 'Estrato 3',
      },
    ],
  },

  {
    id: 39,
    name: 'telefono',
    fieldName: 'Teléfono',
    type: 'number',
    className: `${classInput}`,
  },
  // {
  //   id: 40,
  //   name: 'celular',
  //   fieldName: 'Número Celular',
  //   type: 'number',
  //   className: `${classInput}`,
  // },
  {
    id: 41,
    name: 'correo',
    fieldName: 'Correo electrónico',
    type: 'email',
    className: `${classInput}`,
  },
]
