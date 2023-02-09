import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryDetails({ flags, name, population, region, subregion }) {
  return (
    <Link to={`/${name.common}`}>
    <div className='bg-white rounded-lg shadow overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 transition-all duration-200'>
      <img src={flags.svg} className="md:h-52 w-full object-cover " alt='' />
      <div className='p-4'>
        <h2 className='font-bold texx-lg text-gray-900 dark:text-white mb-2'>{name.common}</h2>
        <ul className='flex flex-col items-start justify-start gap-2 dark:text-gray-400'>
          <li>Population: {population.toLocaleString()}</li>
          <li>Region :{region}</li>
          <li>Subregion :{subregion}</li>
        </ul>
      </div>
    </div>
    </Link>
  )
}
