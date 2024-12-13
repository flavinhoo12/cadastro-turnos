import React, { useState, useEffect } from "react";

function TurnoForm({ salvarTurno, turnoEditado }) {
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");
  const [dias, setDias] = useState([]);

  const opcoesDias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

  useEffect(() => {
    if (turnoEditado) {
      setHoraInicio(turnoEditado.horaInicio);
      setHoraFim(turnoEditado.horaFim);
      setDias(turnoEditado.dias);
    }
  }, [turnoEditado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!horaInicio || !horaFim || dias.length === 0) return alert("Preencha todos os campos!");
    salvarTurno({
      id: turnoEditado?.id || null,
      horaInicio,
      horaFim,
      dias,
    });
    setHoraInicio("");
    setHoraFim("");
    setDias([]);
  };

  const toggleDia = (dia) => {
    setDias((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Hora de Início:</label>
        <input type="time" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} />
      </div>
      <div>
        <label>Hora de Fim:</label>
        <input type="time" value={horaFim} onChange={(e) => setHoraFim(e.target.value)} />
      </div>
      <div>
        <label>Dias da Semana:</label>
        <div>
          {opcoesDias.map((dia) => (
            <label key={dia}>
              <input
                type="checkbox"
                checked={dias.includes(dia)}
                onChange={() => toggleDia(dia)}
              />
              {dia}
            </label>
          ))}
        </div>
      </div>
      <button type="submit">{turnoEditado ? "Editar Turno" : "Adicionar Turno"}</button>
    </form>
  );
}

export default TurnoForm;
