import "./App.scss";
import "./styles/Typography.scss";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Issues from "./pages/issues"
import Team from "./pages/team";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// setConfiguration({
//   gutterWidth: 30,
//   // containerWidths: [2000, 2000, 2000, 2000]
// });

function App() {
  return (
    <div className="App" data-testid="App-element">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/issues' element={<Issues/>} />
          <Route path='/team' element={<Team/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
