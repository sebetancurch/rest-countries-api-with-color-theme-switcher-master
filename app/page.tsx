'use client'

import data from "../data/data.json"
import React, { useState } from "react"
import '../styles/globals.css'


function CountryCard(
    {
        name, 
        flag,
        population,
        region,
        capital
    }: any
) {

    return (

        <a href="./country-details" style={{
            borderRadius: "10px",
            backgroundColor: "white",
            maxWidth: "15%",
            minWidth: "15%",
            height: "300px",
            textDecoration: "none",
            color: "black"
        }}>
            <div style={{backgroundImage: `url(${flag})`, 
            backgroundSize: "100%", 
            backgroundRepeat: "no-repeat", 
            height: "60%", 
            borderTopRightRadius: "10px", 
            borderTopLeftRadius: "10px"}}></div>
            <div style={{padding: "10px 50px", display: "flex",
            flexDirection: "column"}}>
                <span>{name}</span>
                <span>Population: {population}</span>
                <span>Region: {region}</span>
                <span>Capital: {capital}</span>
            </div>
        </a>

    )
}


export default function HomePage()  {

    const [countries, setCountries] = useState(data)

    const searchCountry = (e: any) => {

        const newData = data.filter((country) => country.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))

        setCountries(newData)
    }

    const filterByRegion = (e: any) => {

        const regionCountries = data.filter((country) => country.region === e.target.value)

        setCountries(regionCountries)
    }

    return (<>
        <div className="flex justify-between p-10">
            <label htmlFor="search" className="flex flex-col">
                Search
                <input type="text" name="search" id="search" placeholder="Search country..." onChange={searchCountry}/>
            </label>
            <label htmlFor="selectRegion" className="flex flex-col">
                Filter by region
                <select name="selectRegion" id="selectRegion" onChange={filterByRegion}>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </label>
        </div>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "100px",
            justifyContent: "space-between"
        }}>
            {countries.map((country) => {
                return (
                    <CountryCard 
                        name={country.name}
                        populaiton={country.population}
                        region={country.region}
                        flag={country.flags.png}
                        capital={country.capital} 
                        key={country.name}/>
                )
            })}
        </div>
    </>)
}