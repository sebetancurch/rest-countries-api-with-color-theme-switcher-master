'use client'

import data from "../data/data.json"
import React, { useState } from "react"
import '../styles/globals.css'
import Link from "next/link"
import { InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";


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

        <Link href={{pathname: `/country-details`, query: {name: name}}} className="rounded-xl bg-white w-[20%] h-96 no-underline text-black">
            <div style={{backgroundImage: `url(${flag})`}} className="bg-cover rounded-t-xl bg-no-repeat h-3/5"></div>
            <div style={{padding: "10px 50px"}} className="flex flex-col bg-inherit">
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
    const [region, setRegion] = React.useState('');
    const [typeCountry, setTypeCountry] = React.useState('');

    const searchCountry = (e: any) => {

        setTypeCountry(e.target.value)

        const newData = data.filter((country) => country.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))

        setCountries(newData)
    }

    const filterByRegion = (e: any) => {

        setRegion(e.target.value)

        const regionCountries = data.filter((country) => (country.region === e.target.value && country.name.toLocaleLowerCase().includes(typeCountry.toLocaleLowerCase())))

        setCountries(regionCountries)
    }

    return (
        <>
            <div style={{backgroundColor: "hsl(0, 0%, 98%)"}} className="sticky top-0 z-10 w-full flex justify-between px-20 py-8">
                <TextField 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Search country..." 
                    value={typeCountry} 
                    onChange={searchCountry}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                          </InputAdornment>
                        ),
                    }}/>
                <div className="flex flex-col">
                    <InputLabel id="regionFilterLabel">Filter by region</InputLabel>
                    <Select 
                        sx={{}} 
                        id="regionFilter"
                        labelId="regionFilterLabel"
                        value={region} 
                        label="Filter by region"
                        onChange={filterByRegion}>
                            <MenuItem value={"Africa"}>Africa</MenuItem>
                            <MenuItem value={"Americas"}>Americas</MenuItem>
                            <MenuItem value={"Asia"}>Asia</MenuItem>
                            <MenuItem value={"Europe"}>Europe</MenuItem>
                            <MenuItem value={"Oceania"}>Oceania</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-between px-20">
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
        </>
    )
}