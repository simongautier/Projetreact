import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";

function Main() {
    return(
        <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/> */}
        </Switch>
      </main>

    )
}


export default Main;