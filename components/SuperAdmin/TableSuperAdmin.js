function TableSuperAdmin({ children }) {
  return (
    <div className="table-responsive">
      <table className="w-full mx-auto bg-white rounded-lg">
        <thead>
          <tr>
            <th className="p-4 text-left">C.C</th>
            <th className="p-4 text-left">Nombres</th>
            <th className="p-4 text-left">Apellidos</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Rol</th>
          
          </tr>
        </thead>
        {children}
      </table>
    </div>
  )
}

export default TableSuperAdmin
