'use client'

import { useSearchParams } from 'next/navigation';
import data from "../../data/data.json"

export default function CountryDetails() {

    const countryName = useSearchParams().get('name')
    const country = data.find((country) => country.name === countryName);

    return (
        <>
        <div className="flex justify-center gap-10">
            <img src={country?.flags.svg} alt="Country flag"/>
            <div className='m-4'>
                <span>{country?.name}</span>
            </div>
        </div>
        </>
    )
}