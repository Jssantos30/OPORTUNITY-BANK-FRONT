const classInput = 'h-10 border border-gray-400 px-4'

export const DataContactCitizenForm = [
  {
    id: 34,
    name: 'vivienda',
    fieldName: 'Vivienda',
    type: 'select',
    className: `${classInput}`,
    options: [
      // {
      //   id: 34.01,
      //   name: '',
      //   fieldName: '--Selecciona un campo--',
      // },
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

//

//   {
//     id: 38,
//     name: "comuna",
//     fieldName: "Comuna",
//     type: "text",
//     className: `${classInput}`,
//   },
//   {
//     id: 37,
//     name: "barrio_vereda",
//     fieldName: "Barrio o vereda",
//     type: "text",
//     className: `${classInput}`,
//   },

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
      {
        id: 4,
        name: 4,
        fieldName: 'Estrato 4',
      },
      {
        id: 5,
        name: 5,
        fieldName: 'Estrato 5',
      },
      {
        id: 6,
        name: 6,
        fieldName: 'Estrato 6',
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
