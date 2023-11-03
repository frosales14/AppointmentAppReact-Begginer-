import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setpacientes, paciente, setPaciente }) => {
  const [pet, setpet] = useState("");
  const [owner, setowner] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [sintomas, setsintomas] = useState("");
  const [error, seterror] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setpet(paciente.pet);
      setowner(paciente.owner);
      setemail(paciente.email);
      setdate(paciente.date);
      setsintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([pet, owner, email, date, sintomas].includes("")) {
      seterror(true);
      return;
    }

    const newPaciente = {
      pet,
      owner,
      email,
      date,
      sintomas,
    };

    if (paciente.id) {
      newPaciente.id = paciente.id;

      const pacientesActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? newPaciente : pacienteState
      );
      setpacientes(pacientesActualizado);
      setPaciente({});
    } else {
      newPaciente.id = Date.now().toString(36);
      setpacientes([...pacientes, newPaciente]);
    }

    setdate("");
    setpet("");
    setowner("");
    setemail("");
    setsintomas("");

    seterror(false);
  };

  return (
    <div className="md:w-2/5">
      <h2 className="text-4xl text-center capitalize font-black mb-5">
        Seguimiento pacientes
      </h2>
      <p className="capitalize text-xl font-bold text-center mb-5">
        Añade pacientes y <span className="text-indigo-600">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md px-2 py-5"
      >
        {error && <Error mensaje={"todos los campos son obligatorios"} />}
        <label className="block uppercase font-bold" htmlFor="pet">
          Nombre mascota
        </label>
        <input
          className="border-gray-300 border w-full rounded-md mt-2 p-1"
          placeholder="Firu"
          id="pet"
          type="text"
          value={pet}
          onInput={(e) => setpet(e.target.value)}
        />

        <label className="block uppercase font-bold mt-5" htmlFor="owner">
          Nombre propietario
        </label>
        <input
          className="border-gray-300 border w-full rounded-md mt-2 p-1"
          placeholder="Fernando"
          id="owner"
          type="text"
          value={owner}
          onInput={(e) => setowner(e.target.value)}
        />

        <label className="block uppercase font-bold mt-5" htmlFor="email">
          Correo Electronico
        </label>
        <input
          className="border-gray-300 border w-full rounded-md mt-2 p-1"
          placeholder="ejemplo@gmail.com"
          id="email"
          type="email"
          value={email}
          onInput={(e) => setemail(e.target.value)}
        />

        <label className="block uppercase font-bold mt-5" htmlFor="date">
          Fecha
        </label>
        <input
          className="border-gray-300 border w-full rounded-md mt-2 p-1"
          id="date"
          type="date"
          value={date}
          onInput={(e) => setdate(e.target.value)}
        />

        <label className="block uppercase font-bold mt-5" htmlFor="sintomas">
          sintomas
        </label>
        <textarea
          className="border-gray-300 border w-full rounded-md  my-2 p-1"
          placeholder="sintomas"
          id="sintomas"
          value={sintomas}
          onInput={(e) => setsintomas(e.target.value)}
        />

        <input
          className="bg-indigo-600 text-white w-full p-2 cursor-pointer hover:bg-indigo-700 transition-all"
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
