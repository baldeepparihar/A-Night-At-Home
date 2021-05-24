import React from 'react';
import spinner from '../../assets/spinner.gif';
import './spinner.scss';


const Spinner = () => {
    return(
    <div className="Spinner-Container">
        <img className="Spinner-Icon" src={spinner} alt="Loading..." />
    </div>
    )
}

export default Spinner;