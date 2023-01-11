import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./about/About"
import AddAdmin from "./Admin/AddAdmin"
import Admin from "./Admin/Admin"
import "./App.css"
import Main from "./home/Main"
import Header from "./shared/UI/Header"
import Nav from "./shared/UI/Nav"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/admin/create">
            <AddAdmin />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
