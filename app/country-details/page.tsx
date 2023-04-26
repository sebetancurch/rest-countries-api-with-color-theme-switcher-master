'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import data from "../../data/data.json"
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IsDarkMode } from '../components/header';
import { useContext } from 'react'

export default function CountryDetails() {

    const countryName = useSearchParams().get('name')
    const country = data.find((country) => country.name === countryName);
    const router = useRouter()
    const isDark = useContext(IsDarkMode)
    let borderCountries: string[] = []
    country?.borders?.forEach(element => {
        borderCountries = [...borderCountries, ...data.filter((country) => country.alpha3Code === element).map((dataCountry) => {
            return dataCountry.name
        })]
    });

    return (
        <div style={{backgroundColor: isDark ? "hsl(209, 23%, 22%)" : 'hsl(0, 0%, 98%)'}} className="flex justify-center items-center gap-10 mt-20">
            <div className='flex flex-col'>
                <Button 
                    variant="outlined" 
                    className='w-fit my-10' 
                    color='inherit' 
                    startIcon={<ArrowBackIcon />} 
                    onClick={() => {router.back()}}>
                        Back
                </Button>
                <div className='flex'>
                    <img src={country?.flags.svg} style={{height: 300, width: 600}} alt="Country flag"/>
                    <div className='flex justify-center items-center m-4'>
                        <div className='flex flex-col m-4'>
                            <span className='font-bold text-xl'>{country?.name}</span>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='flex flex-col'>
                                    <span>Native name: {country?.nativeName}</span>
                                    <span>Population: {country?.population}</span>
                                    <span>Region: {country?.region}</span>
                                    <span>Sub Region: {country?.subregion}</span>
                                    <span>Capital: {country?.capital}</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>Top Level Domain: {country?.topLevelDomain}</span>
                                    <span>Currencies: {country?.currencies?.map((currency, index) => {
                                            return (
                                                <span key={currency.code}>{ index !== country.currencies.length - 1 ? currency.name + ', '  : currency.name }</span>
                                            )
                                        })}
                                    </span>
                                    
                                    <span>Languages: {country?.languages?.map((language, index) => {
                                            return (
                                                <span key={language.name}>{ index !== country.languages.length - 1 ? language.name + ', '  : language.name }</span>
                                            )
                                        })}</span>
                                </div>
                            </div>
                            <span>Border countries: {borderCountries.map((border) => {
                                    return (
                                        <span className='px-4 mx-2 border-2 rounded border-black border-solid' key={border}>{ border }</span>
                                    )
                                })}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}