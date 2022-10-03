const classInput = 'flex flex-col items-center'

//Se organiza a una sola linea
export const servicesItem = [
  {
    id: 1,
    title: 'Me gustaría saber si me prestan',
    className: `${classInput}`,
    href: '#requisitos-generales',
    src: `${process.env.NEXT_BASE_PATH}/services-icon-1.svg`,
  },
  {
    id: 2,
    title_sup: '',
    title: 'Quiero solicitar un crédito',
    className: `${classInput}`,
    href: '/switch',
    src: `${process.env.NEXT_BASE_PATH}/services-icon-2.svg`,
  },
  {
    id: 3,
    title: 'Necesito hablar con un asesor',
    className: `${classInput}`,
    href: 'https://api.whatsapp.com/send?phone=573044653088',
    src: `${process.env.NEXT_BASE_PATH}/services-icon-3.svg`,
  },
  {
    id: 4,
    title: 'Quiero simular un crédito',
    className: `${classInput}`,
    href: '/simular-credito',
    src: `${process.env.NEXT_BASE_PATH}/services-icon-4.svg`,
  },
]
