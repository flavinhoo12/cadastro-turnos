import React from "react";

function TurnoList({ turnos, excluirTurno, editarTurno }) {
  return (
    <div>
      <h2>Turnos Cadastrados</h2>
      {turnos.length === 0 ? (
        <p>Nenhum turno cadastrado.</p>
      ) : (
        <ul>
          {turnos.map((turno) => (
            <li key={turno.id}>
              <strong>Início:</strong> {turno.horaInicio} |{" "}
              <strong>Fim:</strong> {turno.horaFim} |{" "}
              <strong>Dias:</strong> {turno.dias.join(", ")}
              <div>
                <button onClick={() => editarTurno(turno)}>Editar</button>
                <button onClick={() => excluirTurno(turno.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TurnoList;
