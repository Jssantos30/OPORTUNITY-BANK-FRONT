import React from 'react'

const TableActivos = ({ children }) => {
  return (
    <div>
      <div className="table-responsive">
        <table className="mx-auto bg-white rounded-lg w-full">
          <thead className="border-b font-bold text-xs">
            <tr>
              <th className="p-4 text-center">Cédula</th>
              <th className="p-4 text-center">Fecha de desembolso</th>
              <th className="p-4 text-center">Monto de desembolso</th>
              <th className="p-4 text-center">Numero de cuotas</th>
              <th className="p-4 text-center">Cuotas pendientes</th>
              <th className="p-4 text-center">Cuota anterior</th>
              <th className="p-4 text-center">Dashboard</th>
            </tr>
          </thead>
          {children}
        </table>
      </div>
    </div>
  )
}

export default TableActivos
