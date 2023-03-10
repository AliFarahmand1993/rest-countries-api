import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import DarkMode from './DarkMode';

export default function SingleCountry() {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const getSingleCountry = async () => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await res.json();
                setCountry(data);
            } catch (error) {
                console.log(error);
            }
        }
        getSingleCountry();
    }, [name])

    return (
        <>
        <DarkMode/>
            <section className='p-8 md:py-8 max-w-7xl mx-auto'>
                {country.map((item) => (
                    <div key={item.population} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen   ">
                        <div>
                            <img src={item.flags.svg} alt={item.name.common}></img>
                        </div>
                        <div>
                            <h1 className='font-bold text-gray-900 text-4xl dark:text-white '>{item.name.official}</h1>
                            <ul className='my-4 flex flex-col items-start justify-start 
                            gap-2 text-slate-700 dark:text-gray-400 '>
                                <li>Capital: {item.capital[0]}</li>
                                <li>Population: {item.population.toLocaleString()}</li>
                                <li>Region: {item.region}</li>
                                <li>SubRegion: {item.subregion}</li>
                            </ul>
                            {item.borders &&
                                <>
                                    <h3 className='text-gray-900 font-bold text-lg mb-2 dark:text-white'>Borders:</h3>
                                    <ul className='flex flex-wrap items-start justify-start gap-2 '>
                                        {item.borders.map((border, index) => (
                                            <li className='bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700' key={index}>{border}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            }
                            <Link className='inline-block mt-8 bg-white py-2 px-6
                            rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-700 dark:text-gray-400' to="/">&larr; Back</Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
