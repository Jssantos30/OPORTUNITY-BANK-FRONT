import React from 'react'

const ClassBox =
  ' rounded-lg p-2 m-2 bg-white w-32 text-center flex flex-col items-center justify-center'
const ClassValueCard = 'text-xl font-semibold'
const ClassTitleCard = 'text-sm'
export const IndicadoresCoutas = ({
  tasa_interes_corriente,
  numero_cuotas,
  cuotas_pendientes,
  cuota_anterior,
  fecha_ultimo_pago,
  abono_total,
  saldo_a_favor,
  saldo_capital,
  saldo_favor_terceros,
  saldo_mayo,
  saldo_total,
}) => {
  return (
    <div className=" flex flex-wrap justify-center">
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{tasa_interes_corriente}</p>
        <label className={ClassTitleCard}>tasa interes corriente</label>
      </div>

      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}> {numero_cuotas}</p>
        <label className={ClassTitleCard}>numero cuotas</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{cuotas_pendientes}</p>
        <label className={ClassTitleCard}>cuotas pendientes</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}> {cuota_anterior}</p>
        <label className={ClassTitleCard}>cuota</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}> {formatDate(fecha_ultimo_pago)}</p>
        <label className={ClassTitleCard}>fecha ultimo pago</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}> {abono_total}</p>
        <label className={ClassTitleCard}>abono </label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{saldo_a_favor ?? 0}</p>
        <label className={ClassTitleCard}>saldo a favor</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{saldo_capital}</p>
        <label className={ClassTitleCard}>saldo capital</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{saldo_favor_terceros ?? 0}</p>
        <label className={ClassTitleCard}>saldo favor terceros</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{saldo_mayo}</p>
        <label className={ClassTitleCard}>saldo mayo</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{saldo_total}</p>
        <label className={ClassTitleCard}>saldo total</label>
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
