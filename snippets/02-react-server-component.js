//app/pokemons/page.js

'use client';
import { useState } from 'react';

export default function Page() {
  const [title, setTitle] = useState('');
  const [imgName, setImgName] = useState('');

  const handleOnChange = (e) => {
    const name = e.target.value;
    setTitle(name);
  };

  const handleOnClick = (e, image) => {
    setImgName(image.name);
  };
  
 return (<div className="flex">
  <form>
    <label className="text-xl">Page</label>
    <input type="text" name={title} 
      onChange={handleOnChange}
    />
    <p className="text-xl">Image:{imgName}</p>
  </form>);
}
