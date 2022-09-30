import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fechaRegistro, setFechaRegistro] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechaRegistro(paciente.fechaRegistro)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validación de formulario
    if([mascota, propietario, email, fechaRegistro, sintomas].includes('')){
      setError(true)
      return
    }

    setError(false)

    const objPaciente = {
      mascota,
      propietario,
      email,
      fechaRegistro,
      sintomas
    }

    if(paciente.id) {
      objPaciente.id = paciente.id

      const updatePacientes = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
      setPacientes(updatePacientes)
      setPaciente({})

    } else {
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente])
    }

    // Limpia form
    setMascota('')
    setPropietario('')
    setEmail('')
    setFechaRegistro('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">adminístralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota:
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={e => setMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Propietario:
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="contacto"
            className="block text-gray-700 uppercase font-bold"
          >
            Email:
          </label>
          <input
            id="contacto"
            type="email"
            placeholder="ejemplo@ejemplo.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fechaRegistro"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha registro:
          </label>
          <input
            id="fechaRegistro"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={fechaRegistro}
            onChange={e => setFechaRegistro(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas:
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>

    </div>
  )
}

export default Formulario