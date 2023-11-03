import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  return (
    <div className="mt-12 md:mt-0 md:ml-5 md:w-2/3 h-screen overflow-y-scroll">
      <h2 className="text-4xl text-center capitalize font-black mb-5">
        Listado de pacientes
      </h2>
      <p className="capitalize text-xl font-bold text-center mb-5">
        Administra tus{" "}
        <span className="text-indigo-600">Pacientes Y Citas</span>
      </p>

      {pacientes.map((paciente) => (
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      ))}
    </div>
  );
};

export default ListadoPacientes;
