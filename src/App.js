
import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todos from './pages/Incomplete_Todos';
import Sidebar from './pages/Sidebar';
import Complete_Todo from './pages/Complete_Todos';
import All from './pages/All';
import Home1 from './pages/Home1';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home1/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/todo/:id' element={<Todo />}/>
        <Route path='/incomplete_todo' element={<Todos/>}/>
        <Route path='/completed' element={<Complete_Todo/>}/>
        <Route path='/all' element={<All/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
