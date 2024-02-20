
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <div className='bg-red-500'>
        Nitish
      </div> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
