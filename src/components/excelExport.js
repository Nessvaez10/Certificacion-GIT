// excelExport.js
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const exportToExcel = (data, filename = 'Turnos.xlsx') => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Turnos');

  // Estilo de encabezado básico
  Object.keys(worksheet).forEach((cell) => {
    if (cell[0] === 'A') worksheet[cell].s = { font: { bold: true }, alignment: { horizontal: 'center' } };
  });

  // Ajuste de anchos de columna
  worksheet['!cols'] = [
    { wch: 12 }, // Consecutivo
    { wch: 10 }, // Turno
    { wch: 15 }, // Oficio
    { wch: 15 }, // Término
    { wch: 20 }, // Remitente
    { wch: 15 }, // Área
    { wch: 20 }, // Asunto
    { wch: 20 }, // Instrucción
    { wch: 20 }, // Área Canalización
    { wch: 10 }, // Prioridad
    { wch: 15 }  // Capturó
  ];

  // Guardar archivo
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, filename);
};
