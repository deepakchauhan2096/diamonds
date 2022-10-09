
import Muljis from './component/Muljis';
import Table from './component/Table';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom" 
function App() {
  return (
    <Router>
        <Routes>
            <Route path='home' element={<Muljis/>}/>
            <Route path='table' element={<Table/>} />
        </Routes>
    </Router>
  );
}

export default App;
