const Paciente = () => {

  return (

    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">Miguel</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">ejemplo@ejemplo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha registro: {''}
        <span className="font-normal normal-case">28/09/2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nobis aliquam aliquid natus rem? Modi quaerat atque ad quas aspernatur! Debitis libero corrupti fuga distinctio optio aliquid labore reprehenderit modi?
        </span>
      </p>
    </div>

  )
}

export default Paciente