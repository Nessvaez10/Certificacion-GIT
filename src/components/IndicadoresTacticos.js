import React, { useState, useRef } from 'react';
import { Button, Table, Tabs, Tab } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import html2pdf from 'html2pdf.js';
import './pdfStyles.css';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const IndicadoresTacticos = () => {
    const [activeTab, setActiveTab] = useState('trimestre1');
    const tableRef = useRef(null);
  
    const handleTabSelect = (tab) => {
      setActiveTab(tab);
    };
  
    const handleDownloadPDF = () => {
      const element = tableRef.current;
      const options = {
        margin: 10,
        filename: 'indicadores.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
      html2pdf().set(options).from(element).save();
    };
  
    const handleDownloadExcel = () => {
      const data = tableData.map((item) => ({
        N: item.id,
        NOMBRE: item.nombre,
        DESCRIPCIÓN: item.descripcion,
        SEMAFORO: `${item.semaforo}%`,
      }));
  
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Indicadores');
  
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(blob, 'indicadores.xlsx');
    };
  
    const dataTrimestre1 = [
      {
        id: 1,
        nombre: 'Porcentaje sobre los asuntos socio-políticos atendidos que realizan los ciudadanos del estado de Hidalgo a la Subsecretaría de Desarrollo Político.',
        descripcion: 'Contribuir a establecer un vínculo permanente entre la sociedad civil y el gobierno...',
        semaforo: 0
      },
      // Agrega más datos si es necesario
    ];
  
    const dataTrimestre2 = [
      {
        id: 1,
        nombre: 'Ejemplo de indicador para Trimestre 2.',
        descripcion: 'Descripción del indicador para el Trimestre 2...',
        semaforo: 0
      },
      // Agrega más datos si es necesario
    ];
  
    const tableData = activeTab === 'trimestre1' ? dataTrimestre1 : dataTrimestre2;
  
    const tableText = tableData.map(item => 
      `${item.id}\t${item.nombre}\t${item.descripcion}\t${item.semaforo}%`
    ).join('\n');
  
    return (
      <div className="container">
        <h1>Rubros de Control Interno</h1>
  
        <Tabs activeKey={activeTab} onSelect={handleTabSelect} className="mb-3">
          <Tab eventKey="trimestre1" title="Trimestre 1"></Tab>
          <Tab eventKey="trimestre2" title="Trimestre 2"></Tab>
        </Tabs>
  
        <div className="mb-3">
          <CopyToClipboard text={tableText}>
            <Button variant="secondary" className="me-2">Copiar</Button>
          </CopyToClipboard>
          <Button variant="secondary" className="me-2" onClick={handleDownloadExcel}>Excel</Button>
          <Button variant="secondary" onClick={handleDownloadPDF}>PDF</Button>
        </div>
  
        <div ref={tableRef} className="pdf-table">
          <Table striped bordered hover className="pdf-table">
            <thead className="table-dark">
              <tr>
                <th>N.</th>
                <th>NOMBRE</th>
                <th>DESCRIPCIÓN</th>
                <th>SEMAFORO</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.descripcion}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="circle" style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {item.semaforo}%
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  };
  
  export default IndicadoresTacticos;