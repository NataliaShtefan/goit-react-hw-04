
import { useEffect, useState } from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchPhoto } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import Eroor from './components/Error/Eroor';


function App() {

  const [result, setResult] = useState([]);
  const [query, setQuery] = useState(''); //початкове значення 
  const [isLoading, setIsLoading] = useState(false); // завантаження
  const [isError, setIsError] = useState(false); // помилка
  const [page, setPage] = useState(1); // довантаження


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
  if (!query) return
 getResult()
}, [query, page])

const hendleSetQuery = query =>{
  setQuery(query);
  setResult([]);
  setPage(1);
}

  
 return (
 <div>

 <SearchBar setQuery={hendleSetQuery}/>
 {isLoading && <Loader/>}
 {isError && <Eroor/>}
 < ImageGallery items={result}/>
<button 
type='button'
onClick={()=>{setPage(prev => prev + 1)}}>Show more</button>


 </div>)
 

}

export default App
