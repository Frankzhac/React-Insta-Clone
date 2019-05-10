import React from "react";
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SearchBar extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/"></a>
          </div>
          <div>
            <FontAwesomeIcon icon="search" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="social-container">
            <div className="social">
              <i className="fa fa-compass" />
            </div>
            <div className="social">
              <i className="fa fa-heart" />
            </div>
            <div className="social">
             <i className="fa fa-user-circle" />
            </div>
         </div>
        </div>
      </nav>
    );
  }
}


export default SearchBar;
