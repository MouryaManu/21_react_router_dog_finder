import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() {
        const DogLinks= this.props.dogs.map(d => (
            <li className="nav-item" key={d.name}>
            <NavLink exact to={`/dogs/${d.name}`} className="nav-link" >
             {d.name} 
            </NavLink>
            </li>
        ));
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div className="container-fluid">
                       <NavLink className="navbar-brand" to="/dogs">Dog App</NavLink>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                       </button>
                   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <NavLink exact to="/dogs" className="nav-link" >Home</NavLink>
                         </li>
                         {DogLinks}
                      </ul>
                   </div>
              </div>
        </nav>
            )
        }
    }
    
    export default Navbar;