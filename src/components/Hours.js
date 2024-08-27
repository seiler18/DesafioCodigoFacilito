import React from 'react';

const Hours = () => {
  const currentDay = new Date().getDay(); // Obtener el día actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)

  const getOpeningHours = () => {
    if (currentDay >= 1 && currentDay <= 5) {
      // Lunes a Viernes
      return 'Open today from 10 a.m. to 4 p.m.';
    } else {
      // Sábado y Domingo
      return 'Open today from 9 a.m. to 8 p.m.';
    }
  };

  return (
    <div>
      <h2>Shelter Opening Hours</h2>
      <h2>Shelter Horario de Apertura</h2>
      <p>{getOpeningHours()}</p>
    </div>
  );
};

export default Hours;