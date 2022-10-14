import { useState } from "react";
import Doc from "./component/Doc";
import Home from "./component/Home";
import { dataContext } from './helpers/Context'
// import Menu from "./component/Menu";
// import Nivoda from "./component/Nivoda";

function App() {
  const [data, setData] = useState();
  const [datan, setDatan] = useState();
  // const [formField , setformField ] = useContext(dataContext)


  return (
    <>
      <dataContext.Provider value={{ data, setData, datan, setDatan}}>
        <Home />
      </dataContext.Provider>
    </>
  );
}

export default App;
