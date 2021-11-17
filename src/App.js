import logo from "./logo.svg";
import "./App.css";

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
          <div class="card">
            <div class="favori">
              <button>3</button>
            </div>
            <a href="#" class="picture">
              <img src="anglais.jpeg" alt="" />
            </a>
            <h2>
              <a href="#">Cours d'anglais</a>
            </h2>
            <p class="price">Pour les débutants</p>
            <p class="location">Paris 75009</p>
          </div>
          <div class="card">
            <div class="favori">
              <button>3</button>
            </div>
            <a href="#" class="picture">
              <img src="enfant.png" alt="" />
            </a>
            <h2>
              <a href="#">Baby sitting</a>
            </h2>
            <p class="price">WE et mercredi</p>
            <p class="location">Paris 75012</p>
          </div>
          <div class="card">
            <div class="favori">
              <button>3</button>
            </div>
            <a href="#" class="picture">
              <img src="fee.gif" alt="" />
            </a>
            <h2>
              <a href="#">Menage</a>
            </h2>
            <p class="price">Lundi et mardi</p>
            <p class="location">Argenteuil 95100</p>
          </div>
        </article>
      </main>
      <footer>
        <p>tati</p>
      </footer>
    </body>
  );
}

export default App;
