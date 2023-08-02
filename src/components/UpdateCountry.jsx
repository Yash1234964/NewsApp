/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class UpdateCountry extends Component {

    constructor(props) {
        super(props);
    }
    changeCountryId = (requiredCountry) => {
        console.log(requiredCountry)
        this.props.setCountry(requiredCountry);
    }

    render() {
        return (<>
            <div>
                <li><Link className="dropdown-item" to="#" onClick={() => this.changeCountryId(this.props.requiredCountry)}>{this.props.requiredCountry}</Link></li>
            </div>
        </>)
    }
}