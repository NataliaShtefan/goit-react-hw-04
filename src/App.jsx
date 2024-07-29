
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
  const [isError, setIsError] = useState(false); // помилка
  const [page, setPage] = useState(0); // довантаження

useEffect(() => {
  const getResult = async() => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await fetchPhoto(query, page);// запит
        setResult(prevResults => [...prevResults, ...res.results]);
      
    }
    catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
 getResult()
}, [query, page])


  
 return (
 <div>

 <SearchBar setQuery={setQuery}/>
 {isLoading && <Loader/>}
 {isError && <Eroor/>}
 < ImageGallery items={result}/>
<button 
type='submit'
onClick={()=>setPage(prev => prev + 1)}>Show more</button>


 </div>)
 

}

export default App
