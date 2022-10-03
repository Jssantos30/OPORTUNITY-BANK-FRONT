import React from 'react'

const ClassBox = ' rounded-lg p-2  bg-white'
const ClassValueCard = 'text-xl font-semibold'
const ClassTitleCard = 'text-sm'

export const IndicadoresPrincipales = ({
  cedula,
  monto_desembolsado,
  fecha_desembolso,
  intereses_mora,
}) => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-4">
      <div className={`md:col-start-1 md:col-span-3 ${ClassBox}`}>
        <p className={ClassValueCard}>{cedula}</p>
        <label className={ClassTitleCard}>cédula</label>
      </div>
      <div className={`md:col-start-4 md:col-span-3 ${ClassBox}`}>
        <p className={ClassValueCard}>{monto_desembolsado}</p>
        <label className={ClassTitleCard}>Monto desembolsado</label>
      </div>
      <div className={`md:col-start-7 md:col-span-3 ${ClassBox}`}>
        <p className={ClassValueCard}>{formatDate(fecha_desembolso)}</p>
        <label className={ClassTitleCard}>fecha desembolso</label>
      </div>
      <div className={`md:col-start-10 md:col-span-3 ${ClassBox}`}>
        <p className={ClassValueCard}>{intereses_mora}</p>
        <label className={ClassTitleCard}>intereses mora</label>
      </div>
    </div>
  )
}

export const formatDate = date => new Date(date).toLocaleDateString('es', dateOptions)
export const dateOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}
