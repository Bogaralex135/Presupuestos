/* eslint-disable react/prop-types */
export function ControlPresupuesto({ presupuesto }) {
  function formatearCantidad(cantidad) {
    return cantidad.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
    })
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica</p>
        <div className='contenido-presupuesto'>
          <p>
            <span>Presupuesto: </span>
            {formatearCantidad(presupuesto)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ControlPresupuesto
