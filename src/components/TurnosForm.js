import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './firebaseConfig';
import { exportToExcel } from './excelExport.js';

const TurnosForm = () => {
  const [turnos, setTurnos] = useState([]);
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
    const unsub = onSnapshot(collection(db, "turnos"), (snapshot) => {
      const turnosData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTurnos(turnosData);
    });

    return () => unsub();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoTurno((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddTurno = async () => {
    await addDoc(collection(db, "turnos"), nuevoTurno);
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

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "turnos", id));
  };

  const handleEdit = async (id) => {
    const turnoToEdit = turnos.find(turno => turno.id === id);
    setNuevoTurno(turnoToEdit);
    await deleteDoc(doc(db, "turnos", id)); // Eliminar temporalmente para reingresarlo editado
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

  const handleExportExcel = () => {
    exportToExcel(turnos);
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
              <th>Consecutivo</th>
              <th>Turno</th>
              <th>Oficio</th>
              <th>Término</th>
              <th>Remitente</th>
              <th>Área</th>
              <th>Asunto</th>
              <th>Instrucción</th>
              <th>Área Canalización</th>
              <th>Prioridad</th>
              <th>Capturó</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                <td>{item.consecutivo}</td>
                <td>{item.turno}</td>
                <td>{item.oficio}</td>
                <td>{item.termino}</td>
                <td>{item.remitente}</td>
                <td>{item.area}</td>
                <td>{item.asunto}</td>
                <td style={styles.instructionCell}>{item.instruccion}</td>
                <td>{item.areaCanalizacion}</td>
                <td style={{ color: getPriorityColor(item.prioridad) }}>{item.prioridad}</td>
                <td>{item.capturo}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)} style={styles.editButton}>Editar</button>
                  <button onClick={() => handleDelete(item.id)} style={styles.deleteButton}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={handleExportExcel} style={styles.exportButton}>
        Exportar a Excel
      </button>
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
 // Ajustes para la sección de la tabla
 tableSection: {
    overflowX: 'auto',
    marginTop: '20px',
  },
  // Ajustes para la tabla y ancho fijo de columnas
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '1000px',
    tableLayout: 'fixed', // Establece un ancho fijo para las columnas
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
  instructionCell: {
    wordWrap: 'break-word', // Permite que el texto se ajuste
    whiteSpace: 'normal',
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