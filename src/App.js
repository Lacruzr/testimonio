
import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contendor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        
        <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        empresa='Amazon'
        foto='shawn'
        testimonioi='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software.'
        testimoniom='freeCodeCamp cambió mi vida.'
        testimoniof=' '
        cargo='Ingeniero de Software'/>

         <Testimonio 
        nombre='Emma Bosnia'
        pais='Suecia'
        empresa='Spotify'
        foto='emma'
        testimonioi='Siempre he tenido pro blemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en '
        testimoniom='freeCodeCamp me dio las habilidades'
        testimoniof = ' y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        cargo='Ingeniera de Software'/>

         <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        empresa='ChatDesk'
        foto='sarah'
        testimonioi=' '
        testimoniom='freeCodeCamp fue la puerta de entrada a mi carrera'
        testimoniof=' como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        cargo='Ingeniera de Software'/>
      </div>
    </div>
  );
}

export default App;
