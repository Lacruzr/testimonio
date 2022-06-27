import React from 'react';
import '../hojas-de-estilo/testimonio.css'

function Testimonio(props){
 return (
  <div className='contenedor-testimonio'>
    <img 
      className='imagen-testimonio'
      src={require(`../imagenes/testimoni-${props.foto}.png`)}
      alt='Foto de Emma'/> 
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre} </strong>  {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonioi} <strong>{props.testimoniom}</strong>{props.testimoniof}"</p>
      </div>

  </div>
 );   
}
export default Testimonio;