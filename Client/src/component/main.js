import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Votes from "./Votes";
import Frais from "./Frais";



function Main() {
    return(
        <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/frais' component={Frais}/>
          <Route path='/Votes' component={Votes}/>
        </Switch>
      </main>

    )
}


export default Main;