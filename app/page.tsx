'use client'

import data from "../data/data.json"
import React, { useContext, useState } from "react"
import '../styles/globals.css'
import Link from "next/link"
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { IsDarkMode } from "./components/header"


function CountryCard(
    {
        name, 
        flag,
        population,
        region,
        capital
    }: any
) {

    const isDark = useContext(IsDarkMode)

    return (

        <Link href={{pathname: `/country-details`, query: {name: name}}} style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white", color: isDark ? "white" : "black"}} 
            className="rounded-xl w-[20%] h-96 no-underline text-black">
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
    const isDark = useContext(IsDarkMode)

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
            <div style={{backgroundColor: isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"}} className="sticky top-0 z-10 w-full flex justify-between px-20 py-8">
                <TextField 
                    type="text"
                    name="search"
                    id="search" 
                    placeholder="Search country..." 
                    value={typeCountry}
                    variant="filled"
                    onChange={searchCountry}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                          </InputAdornment>
                        ),
                    }}/>
                <div className="w-1/6">
                    <FormControl fullWidth>
                        <InputLabel id="regionFilterLabel">Filter by region</InputLabel>
                        <Select
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
                    </FormControl>
                </div>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-between px-20">
                {countries.map((country) => {
                    return (
                        <CountryCard 
                            name={country.name}
                            flag={country.flags.png}
                            populaiton={country.population}
                            region={country.region}
                            capital={country.capital} 
                            key={country.name}/>
                    )
                })}
            </div>
        </>
    )
}