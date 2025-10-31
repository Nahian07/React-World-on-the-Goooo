import React, { useState } from 'react';
import './country.css';

const Country = ({country}) => {
    // console.log(country.cca3.cca3);
    const [visited, setVisited] = useState(false);

    const visitHandler = () => {
        if(visited)
        {
            setVisited(false);
        }
        else
        {
            setVisited(true);
        }
    }
    
    return (
        <div className='card'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common}</h2>
            <h4>Region : {country.region.region}</h4>
            <p>Capital : {country.capital.capital}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? '(Big Country)' : '(Small Country)'}</p>
            <button className={`${visited && 'visited-Btn'}`} onClick={visitHandler}>
                {
                    (visited ? "Visited" : "Not Visited")
                }
            </button>
        </div>
    );
};

export default Country;