import './App.css'
import { Header } from './components/Header'
import { useState } from 'react'
import Modal from './components/Modal'
import { generarID } from './helpers'
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  function handleNuevoGasto() {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  function agregarGasto(gasto) {
    gasto.id = generarID()
    setGastos([...gastos, gasto])

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt='Icono de nuevo gasto'
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          agregarGasto={agregarGasto}
        />
      )}
    </div>
  )
}

export default App
