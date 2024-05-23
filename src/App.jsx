import React from 'react';
import{createBrowserRouter, RouterProvider} from'react-router-dom';
import {Primerpage} from './componentes/primerpage/primerpage';
import {Segundopage} from './componentes/segundopage/segundopage';
import {Tercerapage} from './componentes/tercerapage/tercerapage';
import {Cuartopage} from './componentes/cuartopage/cuartopage';
import {Quintopage} from './componentes/quintopage/quintopage';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Primerpage/>

  },
  {
    path:"segundo",
    element:<Segundopage/>
  },
  {
    path:"tercera",
    element:<Tercerapage/>
  },
  {
    path:"cuarto",
    element:<Cuartopage/>
  },
  {
    path:"quinto",
    element:<Quintopage/>
  }
]);

function App (){

  return(
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>
  )
}
export default App