
import { useEffect, useState } from 'react'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { fetchPhoto } from './services/api';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import Eroor from './components/Error/Eroor';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';



function App() {

  const [result, setResult] = useState([]);
  const [query, setQuery] = useState(''); //початкове значення 
  const [isLoading, setIsLoading] = useState(false); // завантаження
  const [isError, setIsError] = useState(false); // помилка
  const [page, setPage] = useState(1); // довантаження
  const [total, setTotal] = useState(0) // ховати кнопку
  const [selectedImage, setSelectedImage] = useState(null); // вибране фото
  const [isModalOpen, setIsModalOpen] = useState(false); // стан вікна


useEffect(() => {
  const getResult = async() => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await fetchPhoto(query, page);// запит
        setResult(prevResults => [...prevResults, ...res.results]);
      setTotal(res.total_pages)
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

const handleImageClick = (image) => {
  setSelectedImage(image);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedImage(null);
};

  
 return (
 <div>

 <SearchBar setQuery={hendleSetQuery}/>


 {isError && <Eroor/>}

 < ImageGallery items={result} onImageClick={handleImageClick}/>


 {isLoading && <Loader/>}

{total > page && <LoadMoreBtn onClick={()=>{setPage(prev => prev + 1)}}/>}

<ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />

< Toaster/>
 </div>)
 
 

}

export default App
