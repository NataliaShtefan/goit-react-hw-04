
import { useEffect, useState } from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchPhoto } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import Eroor from './components/Error/Eroor';


function App() {

  const [result, setResult] = useState([]);
  const [query, setQuery] = useState('cat'); //початкове значення 
  const [isLoading, setIsLoading] = useState(false); // завантаження
  const [isError, setIsError] = useState(false);

useEffect(() => {
  const getResult = async() => {
    try {
      setIsLoading(true)
      const res = await fetchPhoto(query);
      setResult(res.results) 
    }
    catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  };
  getResult();
}, [query])


  
 return (
 <div>

 <SearchBar setQuery={setQuery}/>
 {isLoading && <Loader/>}
 {isError && <Eroor/>}
 < ImageGallery items={result}/>

 </div>)
 

}

export default App
