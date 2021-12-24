import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DogsList.css';

class DogsList extends Component {
    render() {
        return (
            <div className="DogsList">

                <h1 className="display-1 text-center my-4">This is DOG's LIST</h1>

                <div className="container">
                    <div className="row"> 
                    {this.props.dogs.map(d => (
                       <div className="col-md-4 text=center Dog" key={d.name}>
                       <img src={d.src} alt={d.name} />
                       <h3>
                          <Link className='underline' to={`/dogs/${d.name}`} >{d.name}</Link>  </h3>
                       </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default DogsList;