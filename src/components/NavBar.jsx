/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { Component } from 'react'

import { Link } from 'react-router-dom';
import { UpdateCountry } from './UpdateCountry'
import PropTypes from 'prop-types';

export class NavBar extends Component {
  countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca",
    "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr",
    "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt",
    "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl",
    "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th",
    "tr", "tw", "ua", "us", "ve", "za"]

  static propTypes = {
    setCountry: PropTypes.func.isRequired, // Define the setCountry prop with the 'func' type
  };

  constructor(props) {
    super();
  }

  render() {
    return (
      <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">News King</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><Link className="nav-link" to="general">Headlines</Link></li>
                <li className="nav-item"><Link className="nav-link" to="business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="entertainment">Entertainment</Link></li>

                <li className="nav-item"><Link className="nav-link" to="health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="technology">technology</Link></li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Countries
                  </a>
                  <ul className="dropdown-menu">
                    {this.countries.map((ctry) => {
                      return (<UpdateCountry style={{ backgroundColor: "blue" }} setCountry={this.props.setCountry} requiredCountry={ctry}></UpdateCountry>)
                    })
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>

        </nav >
      </>
    )
  }
}

export default NavBar;