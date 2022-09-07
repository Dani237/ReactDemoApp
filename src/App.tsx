// import { TiposBasicos } from "./typescript/TiposBasicos";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { Funciones } from "./typescript/Funciones";
//import { Contador } from "./components/Contador";
// import { ContadorConHook } from "./components/ContadorConHook";
// import { Login } from "./components/Login";
// import { Usuarios } from "./components/Usuarios";
import { Formularios } from "./components/Formularios";


const App = () =>  {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-reat</h1>
      <hr /> 
      {/* <TiposBasicos/> */}
      <Formularios/>
    </div>
  )
}

export default App;