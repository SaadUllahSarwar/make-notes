import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from "./auth/signup";
import Login from "./auth/Login";
import Sidebar from "./components/Sidebar";
import Homenotes from "./notes/Homenotes";
import Home from './components/Home'
import NewNote from "./notes/NewNote";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notes" element={<NewNote />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* <BrowserRouter>
<header>

<h1>
Saad
</h1>
</header>
<nav>
<NavLink to="/login">
Login
</NavLink>
</nav>
</BrowserRouter> */
}

{/* <div className="flex">
{window.location.pathname != "/login" ? <Sidebar /> : null}

  <div className="flex flex-col h-screen p-3 shadow" style={{width:'100%'}}>
    <Homenotes />
  </div>
</div> */}