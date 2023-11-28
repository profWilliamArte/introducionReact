import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';


const App = () => {
  
  const [contador, setContador] = useState(10);

  useEffect(()=>{
    setContador(40)
  },[])

  function incrementar(){
    setContador(contador+1)
  }
  const elDoble=contador*2;

  const [tabla, setTabla] =useState(1)

  function cambiarNumTabla(num){
    setTabla(num)
  }

  const inputElement = useRef(null);
  const inputElement2 = useRef(null);
  //useEffect(() => {
   // inputElement.current.focus(), []
  //});



// arreglos
const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

const TRAFFIC_LIGHTS = ["red", "orange", "green"];
const [lightIndex, setLightIndex] = useState(0);
const light = TRAFFIC_LIGHTS[lightIndex];

function nextLight() {
  setLightIndex((lightIndex + 1) % TRAFFIC_LIGHTS.length);
}

// al cargar la pagina
const [pageTitle, setPageTitle] = useState("");
useEffect(() => {
  setPageTitle(document.title);
}, []);

// coloca la hora actual y regresca cada segundo
const [time, setTime] = useState(new Date().toLocaleTimeString());
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
}, 1000);

return () => {
    clearInterval(timer);
};
}, []);



//
const [isHappy, setIsHappy] = useState(true);

function onAnswerNo() {
  setIsHappy(false);
}

function onAnswerYes() {
  setIsHappy(true);
}

  return (
    <div className='container'>
      <h1 className='text-center py-5'>Uso de los hook</h1>
      <div className='d-flex justify-content-center'>
        <h3 className='bg-info text-white text-center p-3 m-1'  style={{width:'800px',height:'100px',fontSize:'3rem'}}>{contador}</h3>
        <h3 className='bg-info text-white text-center p-3 m-1'  style={{width:'800px',height:'100px',fontSize:'3rem'}}>{elDoble}</h3>
      </div>
      <div className='text-center my-5'>
        <Button className='btn btn-danger' onClick={incrementar}>Contador</Button>
      </div>
      <hr/>
      <ul>
        {meses.map((mes,index) => ( 
         <li key={index}>{mes}</li>
        ))}
      </ul>
      <hr/>
      <h2 className='text-center py-5'>Tabla de multiplicar</h2>
      <div className='text-center'>
        <div>
        <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(1)}>1</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(2)}>2</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(3)}>3</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(4)}>4</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(5)}>5</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(6)}>6</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(7)}>7</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(8)}>8</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(9)}>9</Button>
         <Button className='btn btn-danger m-1' onClick={() => cambiarNumTabla(10)}>10</Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
              <Button className='btn btn-info m-1' onClick={() => cambiarNumTabla(index+1)} key={index}>{index+1}</Button>
          
          ))}
        <hr/>
          
          {Array.from({ length: 10 }).map((_, index) => (
             <h3 key={index}> {tabla}*{index+1}={(index+1)*tabla} </h3>
          
          ))}
          <hr/> 

         {/*<input type="text" ref={inputElement} onChange={() => cambiarNumTabla(inputElement.current.value)} />*/}


          <input type="text" ref={inputElement} onKeyPress={(event) => {
            const keyCode = event.which || event.keyCode;
            const isValidKey = (keyCode >= 48 && keyCode <= 57) || keyCode === 8 || keyCode === 46;
            if (!isValidKey) {
              event.preventDefault();
            }
          }} onChange={() => cambiarNumTabla(inputElement.current.value)} />













          <hr/> 
          <input type="text" ref={inputElement2} />
          <button className='btn btn-danger' onClick={() => cambiarNumTabla(inputElement2.current.value)}>Ok</button>
          <hr/> 

          <button className='btn btn-dark' onClick={nextLight}>Cambiar Luz</button>
          <h2 style={{color:light}}>La luz esta en: {light}</h2>
          <h3>
            Usted debe: 
            {light === "red" && <span style={{color:light}}> PARAR</span>}
            {light === "orange" && <span style={{color:light}}> DESACELERAR</span>}
            {light === "green" && <span style={{color:light}}>  ARRARCAR</span>}
          </h3>

          <hr/> 
          <h1 className='text-center py-3'>Titulo: {pageTitle}</h1>
          <hr/> 

          <hr/> 
          <h1 className='text-center py-3'>Hora Actual: {time}</h1>
          <hr/> 

          <p>Are you happy?</p>
          <button onYes={onAnswerYes} onNo={onAnswerNo} >SI o  NO</button>
          <p style={{ fontSize: 50 }}>{isHappy ? "😀" : "😥"}</p>
         
       </div> 





    </div>
  )
}

export default App