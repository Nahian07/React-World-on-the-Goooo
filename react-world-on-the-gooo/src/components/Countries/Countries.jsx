import { use } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = ({countriesPromise}) => {
    const countriesdata = use(countriesPromise);
    const countries = countriesdata.countries;

    // console.log(countries);
    
    return (
        <div>
            <h2>All The Countries : {countries.length}</h2>
            <div className="country">
                {
                    countries.map(country => <Country key={country.cca3.cca3}  country = {country}></Country> )
                }
            </div>
        </div>
    );
};

export default Countries;