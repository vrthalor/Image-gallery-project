import React, { useEffect, useState } from 'react';
import Navbar from './common/navbar';
import ImageGalleryComponentOne from './image-gallery/imageGalleryComponentOne';
import ImageGalleryComponentThree from './image-gallery/imageGalleryComponentThree';
import ImageGalleryComponentTwo from './image-gallery/imageGalleryComponentTwo';
// import './App.css';

function Home() {
    const [name, setName] = useState("")
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        setName("Demo")
    })
    return (
        <div className="App">
        </div>
    );
}

export default Home;
