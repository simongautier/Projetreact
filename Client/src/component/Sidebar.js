import { string } from 'prop-types';
import {useState} from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css" 




function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  function sidebar_open() {
    setSidebar(true);
  }
  
  function sidebar_close() {
    setSidebar(false);
  }

  return (
<div className="container">
  <nav>
      <ul className="mcd-menu">
        <li>
          <a>
            <i className="fa fa-home"></i>
            <strong><Link to='/'>Home</Link></strong>
          </a>
        </li>
        <li>
          <a className="active">
            <i className="fa fa-edit"></i>
            <strong><Link to='/Votes'>Votes</Link></strong>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-comments-o"></i>
            <strong><Link to='/Frais'>Frais</Link></strong>
          </a>
          <ul>
            <li><a>
              <i className="fa fa-globe"></i><Link to='/Frais/eth'>Frais ETH</Link></a></li>
            <li><a>
              <i className="fa fa-group"></i><Link to='/Frais/btc'>Frais BTC</Link></a></li>
            <li><a><i className="fa fa-trophy"></i><Link to='/Frais/sol'>Frais Sol</Link></a></li>
          </ul>

          </li>
          <li><a><i className="fa fa-home"></i>
          <strong><Link to='/Inscriptions'>Inscriptions</Link></strong>
          </a></li>

        <li>
          <a>
            <i className="fa fa-envelope-o"></i>
            <strong><Link to='/Contact'>Contact</Link></strong>
            <small>drop a line</small>
          </a>
        </li>
        <li className="float">
          <a className="search">
            <input type="text" value="search ..."></input>
            <button><i className="fa fa-search"></i></button>
          </a>
          <a href="" className="search-mobile">
            <i className="fa fa-search"></i>
          </a>
        </li>
      </ul>
    </nav>
</div>
  )
}

export default Sidebar;