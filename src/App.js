import './App.css';
import './index.css';

import Login from './login/Login';
import { Route,Routes } from "react-router-dom"


function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Routes>
        <Route path="/todo-app" element={console.log("haha")}/>
        <Route path='/todo-app/register' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
