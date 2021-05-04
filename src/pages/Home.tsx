import React, {useState} from 'react'
import useCountries from '../components/hooks/useCountries'
import MainTable from '../components/MainTable/MainTable'
import SearchBar from '../components/SearchBar/searchbar'





export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [countries] = useCountries(searchTerm)
  console.log(countries)

  const handleChange = (event : React.ChangeEvent<HTMLInputElement> ) => {
    setSearchTerm(event.target.value);

  };
  return (

    <>
      
      <SearchBar searchTerm = {searchTerm} handleChange = {handleChange} />
      <MainTable countries={countries}/>
      
    </>
  )
}
