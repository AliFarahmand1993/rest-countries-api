import { useState, useEffect } from "react"
import CountryDetails from "./CountryDetails";

export default function Countries() {

    const [countries, SetCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const respons = await fetch('https://restcountries.com/v3.1/all');
                const data = await respons.json();
                SetCountries(data.slice(0, 10));
            } catch (error) {
                console.log(error)
            }
        }
        getCountries();
    }, [])
    return (
        <>
            {!countries ? (
                <h1 className="text-gray font-bold uppercase tracking-wide flex items-center          justify-center text-center h-screen text-4xl dark:text-white">Loading...</h1>
            )

                : (<section className="container mx-auto p-8 ">
                    {/* {form} */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3
                    2xl:grid-cols-4">
                        {countries.map((country) => (<CountryDetails key={country.name.common} {...country} />
                        ))}
                    </div>
                </section>)}
        </>
    )
}