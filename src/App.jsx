
import { useEffect, useState } from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchPhoto } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  const [result, setResult] = useState([]);

useEffect(() => {
  const getResult = async() => {
    try {
      const res = await fetchPhoto(`cat`);
      setResult(res.results)
    }
    catch (error) {
      console.log(error)
    }
  };
  getResult();
}, [])


  
 return (
 <div>

 <SearchBar/>
 < ImageGallery items={result}/>

 </div>)
 

}

export default App
