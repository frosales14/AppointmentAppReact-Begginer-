import { useState } from "react";
import Formulario from "./components/Formulario";
import { Header } from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setpacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const deletePaciente = (id) => {
    const newPacientes = pacientes.filter(
      (pacienteValue) => pacienteValue.id !== id
    );
    setpacientes(newPacientes);
  };

  return (
    <div className="mx-10 my-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setpacientes={setpacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
    </div>
  );
}

export default App;
