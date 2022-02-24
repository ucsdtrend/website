import "./App.scss";
import "./styles/Typography.scss";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Issues from "./pages/issues"
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// setConfiguration({
//   gutterWidth: 30,
//   // containerWidths: [2000, 2000, 2000, 2000]
// });

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/issues' element={<Issues/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
