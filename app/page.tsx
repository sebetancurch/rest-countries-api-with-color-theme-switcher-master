'use client'

import data from "../data/data.json"
import React, { useState } from "react"
import Link from "next/link"


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

        <Link href={{pathname: `/country-details`, query: {name: name}}} className="rounded-xl bg-white max-w-[15%] min-w-[15%] h-80 no-underline text-black">
            <div style={{backgroundImage: `url(${flag})`}} className="bg-cover rounded-t-xl bg-no-repeat h-3/5"></div>
            <div style={{padding: "10px 50px"}} className="flex flex-col">
                <span>{name}</span>
                <span>Population: {population}</span>
                <span>Region: {region}</span>
                <span>Capital: {capital}</span>
            </div>
        </Link>

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
        <div className="flex justify-between p-2">
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
        <div className="flex flex-wrap gap-2.5 justify-between overflow-auto">
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