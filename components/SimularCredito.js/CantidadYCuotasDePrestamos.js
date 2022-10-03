import * as React from 'react'
import { separadorMillares } from '../../utils/separadorMillares'

const CantidadYCuotasDePrestamos = ({ lineaCreditoInfo }) => {
  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl font-semibold text-color_primary_2_ligth my-4">
        {' '}
        Las condiciones para esta línea son:{' '}
      </h2>
      <div className="mb-16">
        <div className="flex justify-evenly mt-4  border-b-2">
          <div className="w-11/12 mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
            <span className="font-semibold w-1/2">Un plazo de:</span>
            <span className=" font-semibold w-1/2">
              Entre 1 hasta {lineaCreditoInfo.num_cuotas} meses
            </span>
          </div>
        </div>
        <div className="flex justify-evenly mt-4 border-b-2">
          <div className="w-11/12 mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
            <span className="text-lg font-semibold w-1/2">Un monto máximo de:</span>
            <span className="text-lg font-semibold w-1/2">{`$ ${separadorMillares(
              lineaCreditoInfo.monto_total,
            )}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CantidadYCuotasDePrestamos
