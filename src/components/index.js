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
            {/* <h2>This is home {name}</h2> */}
            <Navbar setSelected={setSelected} selected={selected}/>
            {selected == 1 && <ImageGalleryComponentOne />}
            {selected == 2 && <ImageGalleryComponentTwo />}
            {selected == 3 && <ImageGalleryComponentThree />}



        </div>
    );
}

export default Home;
