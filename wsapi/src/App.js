import './App.css';
import Users from './components/Users';
import {Routes, Route } from "react-router-dom"
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/"  element={<Users></Users>} ></Route>
     <Route path="/details/:id"  element={<Details/>} ></Route>

     </Routes>
    </div>
  );
}

export default App;
