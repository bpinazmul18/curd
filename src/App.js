import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { GamesPage } from "./GamesPage";
import { Errors } from "./Errors";
// import { Posts } from "./Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </header>
      <section>
        <Link className="link" to="games">
          Games
        </Link>
        {/*<Link className="link" to="posts">*/}
        {/*  Posts*/}
        {/*</Link>*/}
        <Switch>
          <Route exact path="/games" component={GamesPage} />
          {/*<Route exact path="/posts" component={Posts} />*/}
          <Route exact component={Errors} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
