import React, { useState } from "react";
import TurnoForm from "./components/TurnoForm";
import TurnoList from "./components/TurnoList";

function App() {
  const [turnos, setTurnos] = useState([]);
  const [editandoTurno, setEditandoTurno] = useState(null);

  // Função para adicionar ou editar turnos
  const salvarTurno = (novoTurno) => {
    if (novoTurno.id) {
      // Editar turno existente
      setTurnos((prev) =>
        prev.map((turno) => (turno.id === novoTurno.id ? novoTurno : turno))
      );
    } else {
      // Adicionar novo turno
      setTurnos((prev) => [...prev, { ...novoTurno, id: Date.now() }]);
    }
    setEditandoTurno(null);
  };

  // Função para excluir um turno
  const excluirTurno = (id) => {
    setTurnos((prev) => prev.filter((turno) => turno.id !== id));
  };

  // Função para editar um turno
  const editarTurno = (turno) => {
    setEditandoTurno(turno);
  };

  return (
    <div className="container">
      <h1>Cadastro de Turnos de Funcionamento</h1>
      <TurnoForm salvarTurno={salvarTurno} turnoEditado={editandoTurno} />
      <TurnoList turnos={turnos} excluirTurno={excluirTurno} editarTurno={editarTurno} />
    </div>
  );
}

export default App;
