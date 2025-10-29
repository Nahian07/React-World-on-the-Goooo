import React from 'react';
import './country.css';

const Country = ({country}) => {
    // console.log(country.area.area);
    const visitHandler = () => {
        console.log("clicked");
        
    }
    
    return (
        <div className='card'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h4>Region : {country.region.region}</h4>
            <p>Capital : {country.capital.capital}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? '(Big Country)' : '(Small Country)'}</p>
            <button onClick={visitHandler}>Not Visited</button>
        </div>
    );
};

export default Country;