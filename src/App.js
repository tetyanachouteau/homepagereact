import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Favori from "./Favori";

function App() {
  return (
    <body>
      <header>
        <h1>Le bon service</h1>
        <p>Echange de Services entre particuliers</p>
        <form>
          <input type="search" name="q" placeholder="Rechercher" />
          <input type="submit" value="Lancer" />
        </form>
      </header>

      <main>
        <aside>
          <nav>
            <ul>
              <li>
                <a href="#">Loisir</a>
              </li>
              <li>
                <a href="#">Sport</a>
              </li>
              <li>
                <a href="#">Covoiturage</a>
              </li>
              <li>
                <a href="#">Autre</a>
              </li>
            </ul>
          </nav>
        </aside>
        <article>
          <Card></Card>
        </article>
      </main>
      <footer>
        <p>tati</p>
      </footer>
    </body>
  );
}

export default App;
