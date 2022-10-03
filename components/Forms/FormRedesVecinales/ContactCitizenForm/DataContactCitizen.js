export const DataContactCitizen = [
  {
    id: 9,
    name: 'livinPlace',
    fieldName: 'Vivienda',
    type: 'select',
    className: '',
    options: [
      // {
      //   id: 9.1,
      //   name: '',
      //   fieldName: '--Selecciona un campo--',
      //   className: '',
      // },
      {
        id: 9.2,
        name: 'owner',
        fieldName: 'Propia',
        className: '',
      },
      {
        id: 9.3,
        name: 'familiar',
        fieldName: 'Familiar',
        className: '',
      },
      {
        id: 9.4,
        name: 'rent',
        fieldName: 'Arrendada',
        className: '',
        options: [
          {
            id: 9.4 - 1,
            name: 'landlordName',
            fieldName: 'Nombre del arrendador',
            type: 'text',
            className: '',
          },
          {
            id: 9.4 - 2,
            name: 'landlordPhone',
            fieldName: 'Teléfono del arrendador',
            type: 'number',
            className: '',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'address',
    fieldName: 'Dirección',
    type: 'text',
    className: '',
  },
  {
    id: 36,
    name: 'socialStatus',
    fieldName: 'Estrato',
    type: 'number',
    className: '',
  },
  {
    id: 37,
    name: 'neighboorhoodName',
    fieldName: 'Barrio o vereda',
    type: 'text',
    className: '',
  },
  {
    id: 38,
    name: 'comunmuneNumber',
    fieldName: 'Comuna',
    type: 'number',
    className: '',
  },
  {
    id: 39,
    name: 'numberPhone',
    fieldName: 'Teléfono',
    type: 'tel',
    className: '',
  },
  {
    id: 40,
    name: 'numberMobile',
    fieldName: 'Número Celular',
    type: 'tel',
    className: '',
  },
  {
    id: 41,
    name: 'email',
    fieldName: 'Correo electrónico',
    type: 'emaail',
    className: '',
  },
]
