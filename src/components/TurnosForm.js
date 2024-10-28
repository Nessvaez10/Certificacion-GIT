import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';

const TurnosForm = () => {
  const [turnos, setTurnos] = useState(() => {
    // Carga los datos desde localStorage solo una vez al inicializar el estado
    const savedTurnos = localStorage.getItem('turnos');
    return savedTurnos ? JSON.parse(savedTurnos) : [];
  });
  
  const [nuevoTurno, setNuevoTurno] = useState({
    consecutivo: '',
    turno: '',
    oficio: '',
    termino: '',
    remitente: '',
    area: '',
    asunto: '',
    instruccion: '',
    areaCanalizacion: '',
    prioridad: '',
    capturo: ''
  });
  useEffect(() => {
    // Guarda en localStorage cada vez que 'turnos' cambia
    localStorage.setItem('turnos', JSON.stringify(turnos));
  }, [turnos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoTurno((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddTurno = () => {
    setTurnos([...turnos, nuevoTurno]);
    setNuevoTurno({
      consecutivo: '',
      turno: '',
      oficio: '',
      termino: '',
      remitente: '',
      area: '',
      asunto: '',
      instruccion: '',
      areaCanalizacion: '',
      prioridad: '',
      capturo: ''
    });
  };

  const handleDelete = (index) => {
    setTurnos(turnos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setNuevoTurno(turnos[index]);
    setTurnos(turnos.filter((_, i) => i !== index));
  };

  const handleSetPriority = (priority) => {
    setNuevoTurno((prevState) => ({
      ...prevState,
      prioridad: priority
    }));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'DE TRÁMITE':
        return '#bc955b';
      case 'URGENTE':
        return '#611131';
      case 'NO URGENTE':
        return '#32cd32';
      default:
        return 'transparent';
    }
  };

  return (
    <div style={styles.container}>
      <h2>Administrar Turnos</h2>
      <div style={styles.formSection}>
        <input type="text" name="consecutivo" placeholder="Consecutivo" value={nuevoTurno.consecutivo} onChange={handleChange} style={styles.input} />
        <input type="text" name="turno" placeholder="Turno" value={nuevoTurno.turno} onChange={handleChange} style={styles.input} />
        <input type="text" name="oficio" placeholder="Oficio" value={nuevoTurno.oficio} onChange={handleChange} style={styles.input} />
        <input type="text" name="termino" placeholder="Término" value={nuevoTurno.termino} onChange={handleChange} style={styles.input} />
        <input type="text" name="remitente" placeholder="Remitente" value={nuevoTurno.remitente} onChange={handleChange} style={styles.input} />
        <input type="text" name="area" placeholder="Área" value={nuevoTurno.area} onChange={handleChange} style={styles.input} />
        <input type="text" name="asunto" placeholder="Asunto" value={nuevoTurno.asunto} onChange={handleChange} style={styles.input} />
        <input type="text" name="instruccion" placeholder="Instrucción" value={nuevoTurno.instruccion} onChange={handleChange} style={styles.input} />
        <input type="text" name="areaCanalizacion" placeholder="Área Canalización" value={nuevoTurno.areaCanalizacion} onChange={handleChange} style={styles.input} />
        <input type="text" name="capturo" placeholder="Capturó" value={nuevoTurno.capturo} onChange={handleChange} style={styles.input} />

        <div style={styles.prioritySection}>
          <label>Prioridad:</label>
          <button onClick={() => handleSetPriority('DE TRÁMITE')} style={{ ...styles.priorityButton, backgroundColor: '#bc955b' }}>DE TRÁMITE</button>
          <button onClick={() => handleSetPriority('URGENTE')} style={{ ...styles.priorityButton, backgroundColor: '#611131' }}>URGENTE</button>
          <button onClick={() => handleSetPriority('NO URGENTE')} style={{ ...styles.priorityButton, backgroundColor: '#32cd32' }}>NO URGENTE</button>
        </div>
        <button onClick={handleAddTurno} style={styles.button}>Agregar Turno</button>
      </div>

      <div style={styles.tableSection}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Consecutivo</th>
              <th style={styles.th}>Turno</th>
              <th style={styles.th}>Oficio</th>
              <th style={styles.th}>Término</th>
              <th style={styles.th}>Remitente</th>
              <th style={styles.th}>Área</th>
              <th style={styles.th}>Asunto</th>
              <th style={styles.th}>Instrucción</th>
              <th style={styles.th}>Área Canalización</th>
              <th style={styles.th}>Prioridad</th>
              <th style={styles.th}>Capturó</th>
              <th style={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                <td style={styles.td}>{item.consecutivo}</td>
                <td style={styles.td}>{item.turno}</td>
                <td style={styles.td}>{item.oficio}</td>
                <td style={styles.td}>{item.termino}</td>
                <td style={styles.td}>{item.remitente}</td>
                <td style={styles.td}>{item.area}</td>
                <td style={styles.td}>{item.asunto}</td>
                <td style={styles.td}>{item.instruccion}</td>
                <td style={styles.td}>{item.areaCanalizacion}</td>
                <td style={{ ...styles.td, color: getPriorityColor(item.prioridad) }}>{item.prioridad}</td>
                <td style={styles.td}>{item.capturo}</td>
                <td style={styles.td}>
                  <button onClick={() => handleEdit(index)} style={styles.editButton}>Editar</button>
                  <button onClick={() => handleDelete(index)} style={styles.deleteButton}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CSVLink data={turnos} filename="turnos.csv" style={styles.exportButton}>        Exportar a Excel
      </CSVLink>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  formSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    gridColumn: 'span 3',
    padding: '10px',
    backgroundColor: '#611131',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  tableSection: {
    overflowX: 'auto',
    marginTop: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '1000px',
  },
  th: {
    padding: '10px',
    backgroundColor: '#ddd',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '10px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    borderBottom: '1px solid #ddd',
  },
  editButton: {
    padding: '5px',
    backgroundColor: '#b58030',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  deleteButton: {
    padding: '5px',
    backgroundColor: '#611131',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  exportButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#bc955b',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
  },
  prioritySection: {
    gridColumn: 'span 3',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10px',
  },
  priorityButton: {
    padding: '8px 12px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TurnosForm;
