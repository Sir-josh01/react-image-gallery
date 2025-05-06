import React, { useState, useEffect } from "react";
import sirJoe from './assets/sir-joseph.jpg'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

const App = () => {
  const PIXABAY_API_KEY = import.meta.env.VITE_APP_PIXABAY_API_KEY
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
      console.log(data)
    })
    .catch(err => console.log(err))
  }, [term])


  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && <h1 className='font-semibold text-center text-5xl mx-auto mt-30'>No images Found</h1>}
     {isLoading ? <h1 className='font-semibold text-center text-6xl mx-auto mt-30'>Loading...</h1> : <div className="grid grid-cols-3 gap-3">
      {images.map(image => (
         <ImageCard key={image.id} image={image} />
      ))}
      </div>}
    </div>
 
  );
};

export default App;
