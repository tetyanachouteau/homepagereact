import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Favori from "./Favori";
import Card from "./Card";
function App() {
  return (
    <body>
      <header>
      <div class="line">
        <h1>Le bon service</h1>
        <p>Echange de Services entre particuliers</p>
        <h1 class="logo"><img src="textencouleur.JPG" alt="" /></h1> 
        <form>
          <input type="search" name="q" placeholder="Rechercher" />
          <input type="submit" value="Lancer" />
        </form>
        </div>
      
          <nav>
            <ul>
              <li>
                <a href="#">Loisir</a>
              </li>
              <li>
                <a href="./index.html">Sport</a>
              </li>
              <li>
                <a href="#">Covoiturage</a>
              </li>
              <li>
                <a href="#">Autre</a>
              </li>
            </ul>
          </nav>
          </header>
          <main>
        <aside>
        <article>
          <Card></Card>
        </article>
      </main>
      <footer>
        <p>Exercise</p>
        <div className="App">
          <h4> Button </h4>
          <input ref={textInput} type="text" />
          <button onClick={onOnclickHandler}>Click Here</button>
          <Button variant="danger" onClick={onOnclickHandler}>
            Clear here2
          </Button>
          {""}
          <button onClick={onOnclickHandlerClear}>Clear</button>
          <Button variant="danger" onClick={onOnclickHandler}>
            Clear here2
          </Button>
          {""}
          <h2>
            {message.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
          </h2>
        </div>
      </footer>
    </body>
  );
}

export default App;
