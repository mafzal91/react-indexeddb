import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { MenuProvider } from "./providers/Menu";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/'>
            <div className='App'>
              <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Link className='App-link' to={"/menu"}>
                  To Menu
                </Link>
              </header>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App;
