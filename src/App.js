import "./App.scss";
import "./styles/Typography.scss";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Issues from "./pages/issues"
import Team from "./pages/team";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react';


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
          <Route path='/about' element={<About/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
