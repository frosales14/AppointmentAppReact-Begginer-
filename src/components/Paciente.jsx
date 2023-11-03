const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
  const { pet, owner, email, date, sintomas } = paciente;

  return (
    <div className="px-5 m-3 py-10 bg-white shadow-md rounded-xl ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{pet}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex flex-col gap-2 md:flex-row">
        <button
          className="bg-indigo-600 text-white px-10 py-2 hover:bg-indigo-700 font-bold rounded-md"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 text-white px-10 py-2 hover:bg-red-700 font-bold rounded-md"
          type="button"
          onClick={() => deletePaciente(paciente.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
