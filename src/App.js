import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Result from './Components/Result/Result';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='Result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
