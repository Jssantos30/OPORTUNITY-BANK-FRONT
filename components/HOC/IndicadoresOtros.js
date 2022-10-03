import React from 'react'

const ClassBox =
  ' rounded-lg p-2 m-2 bg-white w-40 text-center flex flex-col items-center justify-center'
const ClassValueCard = 'text-xl font-semibold'
const ClassTitleCard = 'text-sm'

export const IndicadoresOtros = ({
  dias_periodo_gracia,
  estado_cartera,
  estado_credito,
  obligacion,
  origen_recurso,
  periodo_gracia,
  registro_activo,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}> {dias_periodo_gracia ?? 0}</p>
        <label className={ClassTitleCard}>dias periodo gracia</label>
      </div>

      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{estado_cartera}</p>
        <label className={ClassTitleCard}>estado cartera</label>
      </div>

      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{estado_credito}</p>
        <label className={ClassTitleCard}>estado credito</label>
      </div>

      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{obligacion}</p>
        <label className={ClassTitleCard}>obligacion</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{origen_recurso}</p>
        <label className={ClassTitleCard}>origen recurso</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{periodo_gracia ?? 0}</p>
        <label className={ClassTitleCard}>periodo gracia</label>
      </div>
      <div className={` ${ClassBox}`}>
        <p className={ClassValueCard}>{registro_activo}</p>
        <label className={ClassTitleCard}>registro activo</label>
      </div>
    </div>
  )
}
