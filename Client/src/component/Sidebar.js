import { BrowserRouter as Router, Link } from "react-router-dom";

function Sidebar() {
    return (
            <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Votes'>Votes</Link></li>
        <li><Link to='/Frais'>Frais</Link></li>
      </ul>
    </nav>
  </header>
    )
}

export default Sidebar;