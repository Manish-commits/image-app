import React, { useState } from 'react';
import searchImages from './api';
import ImageList from './Components/ImageList';
import SearchBar from './Components/SearchBar';
import Todo from './Components/Todo';

const App = () => {

  const [images, setImages] = useState([]);
  
  const onhandleSubmit = async (term) =>  {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div>
    <SearchBar onSubmit={onhandleSubmit} />
    <ImageList images={images}/>
    {/* <Todo /> */}
    </div>
  )
}

export default App