/* eslint-disable react/prop-types */
import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../assets/img/cerrar.svg'

export function Modal({ setModal, animarModal, setAnimarModal, agregarGasto }) {
  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [categoria, setCategoria] = useState('')

  function ocultarModal() {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son requeridos')

      setTimeout(() => {
        setMensaje('')
      }, 3000)

      return
    }

    agregarGasto({ nombre, cantidad, categoria })
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarBtn} alt='Cerrar modal' onClick={ocultarModal} />
      </div>

      <form
        action=''
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            type='text'
            placeholder='Añade el nombre del gasto'
            id='nombre'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            type='number'
            placeholder='Añade la cantidad del Gasto'
            id='cantidad'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Categoria</label>
          <select
            id='categoria'
            value={categoria}
            onChange={e => setCategoria(e.target.value)}>
            <option value=''>-- SELECCIONE UNA CATEGORIA --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>

        <input type='submit' value='AÑADIR GASTO' />
      </form>
    </div>
  )
}

export default Modal
