import React from "react"
import TarjetaFruta  from "./componentes/TarjetaFruta"

const App = () => (
    <div>
      <TarjetaFruta name= 'sandia' price={2.500}/>
      <TarjetaFruta name= 'naranja' price={8.000}/>
      <TarjetaFruta name= 'fresa' price={9.000}/>   
    </div>
  )

  export default App