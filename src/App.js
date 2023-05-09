import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import Usuarios from "./components/Usuarios/Usuarios";
import AdicionarUsuario from "./components/AdicionarUsuario/AdicionarUsuario";
import Home from "./components/Home/Home";
import DetalhesUsuario from "./components/DetalhesUsuario/DetalhesUsuario";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Usuarios Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Usuarios</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route
              path="/usuarios/:codigo"
              element={<DetalhesUsuario />}
            ></Route>
            <Route path="/usuarios" element={<Usuarios />}></Route>
            <Route path="/adicionar" element={<AdicionarUsuario />}></Route>
            <Route path="*" element={<PaginaNaoEncontrada />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada() {
  return (
    <>
      <h1>404</h1>
      <p>Pagina nao encontrada</p>
    </>
  );
}

export default App;
