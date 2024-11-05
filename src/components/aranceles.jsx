import React from 'react'
import Grid from '@mui/material/Grid2';
import UsmLogo from '../assets/postulaciones.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const styleC = {
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: '#fff',
  textAlign: 'center',
  height: '265px', 
  borderRadius: 2,
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);',
  display: 'flex',
  justifyContent: 'initial',
  alignItems: 'end',
}

const Aranceles = () => {
  return (
    <div>
      <p>La Universidad Técnica Federico Santa María, de acuerdo a los decretos 623/2023, 624/2023 y 625/2023, ha fijado los valores de arancel y derecho básico de matrícula para estudiantes nuevos para las Carreras de Pregrado y Programas Científicos admisión 2024.
        Estos se dividen en:</p>
      
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', paddingTop: '40px' }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ ...styleC, padding: 0 }}>
          <a href="https://usm.cl/admision/aranceles/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', display: 'block', height: '100%' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'left', alignItems: 'end', fontWeight: 'bold'}}>
              <img src={UsmLogo} alt="Admisión USM" style={{ width: '100%', height: '265px', objectFit: 'cover', borderRadius: '5px' }} />
              <p style={{ 
                position: 'absolute', 
                color: 'white', 
                borderRadius: '5px',
                textAlign: 'center',
                fontSize: 'xx-large',
                margin: 0,
                fontWeight: 'bold',
                padding: '20px'
              }}>Aranceles Diurnos</p>
            </div>
          </a>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ ...styleC, padding: 0 }}>
          <a href="https://usm.cl/admision/carreras-vespertinas/aranceles/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', position: 'relative', display: 'block', height: '100%' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'left', alignItems: 'end' }}>
              <img src={UsmLogo} alt="Admisión USM" style={{ width: '100%', height: '265px', objectFit: 'cover', borderRadius: '5px' }} />
              <p style={{ 
                position: 'absolute', 
                color: 'white', 
                borderRadius: '5px',
                textAlign: 'center',
                fontSize: 'xx-large',
                margin: 0,
                fontWeight: 'bold',
                padding: '20px'
              }}>Aranceles Vespertinos</p>
            </div>
          </a>
        </Grid>
      </div>
    </div>
  )
}

export default Aranceles
