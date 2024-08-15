
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Auth/Signup';
import { Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
