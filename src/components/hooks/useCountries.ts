import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Country, AppState} from '../../types'
import {fetchCountry} from '../../redux/actions'


export default function useCountries(searchTerm: string) :[ Country[]] {
   
    const [filteredCountries, setfilteredCountries] = useState <Country[]>([]);
    const dispatch = useDispatch()
    const {allCountries} = useSelector((state:AppState) => state.country)
    
    useEffect(() => {
        dispatch(fetchCountry())
    }, [dispatch]);


    useEffect(() => {
    let filteredData = allCountries.filter((country) => {
        return (
            country.name.toLowerCase().search(searchTerm.toLowerCase()) !== -1 || 
            country.nativeName?.toLowerCase().search(searchTerm.toLowerCase()) !== -1
        );
    });
    setfilteredCountries (filteredData);
},[allCountries, searchTerm]);

    return [ filteredCountries];     
}
