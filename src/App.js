import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./views/Home/Home";

function App() {
  return (
 <BrowserRouter>
  <Routes>
    {/* Enrutar */}
    <Route path= "/" element ={<Home/>}/> 
    <Route path= "*" element ={<Home/>}/>

  </Routes>
 </BrowserRouter>
  );
}

export default App;
