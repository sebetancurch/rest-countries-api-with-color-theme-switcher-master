'use client'

import { useSearchParams } from 'next/navigation';
import data from "../../data/data.json"

export default function CountryDetails() {

    const countryName = useSearchParams().get('name')
    const country = data.find((country) => country.name === countryName);

    return (
        <div style={{backgroundColor: 'hsl(0, 0%, 98%)'}} className="flex justify-center items-center gap-10 my-10">
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
                            <span>Currencies: {country?.currencies?.map((currency) => {
                                    return (
                                        <span key={currency.code}>{currency.name}</span>
                                    )
                                })}
                            </span>
                            
                            <span>Languages: {country?.languages?.map((language) => {
                                    return (
                                        <span key={language.name}>{language.name}</span>
                                    )
                                })}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}