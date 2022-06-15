import React, { useEffect, useState } from 'react';
// import './App.css';
import Lightbox from 'lightbox-react';
import { data } from '../../static/data'
import 'lightbox-react/style.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ImageGalleryComponentThree() {
    const [name, setName] = useState("")
    const [photoIndex, setPhotoIndex] = useState(0)
    const [galleryDetails, setGalleryDetails] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        setName("Demo")
        setGalleryDetails(data)
        console.log(data)
    }, [data])
    const openImageFun = (index) => {
        console.log(index)
        setPhotoIndex(index)
        setIsOpen(true)
    }
    const searchFun = (e) =>{
        setSearchText(e.target.value)
        console.log(searchText)
    }
    return (
        <div className="App">

            {/* <button onClick={() => setIsOpen(!isOpen)} className='btn btn-small btn-primary'>Open</button> */}
            <div className='container imageGallery1 mt-3'>
                <div className="card imageGallery1">
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <h4 style={{ color: "red" }} className=''>Image Gallery Example Three</h4>
                            </div>
                            <div className='col-md-7'>
                                <div className='mainSearch'>
                                    <div class="form-group has-search">
                                        <span class="fa fa-search form-control-feedback"></span>
                                        <input onChange={searchFun} value={searchText} type="text" class="form-control" placeholder="Search by car, city, flower, house, laptop" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            {galleryDetails && galleryDetails.length > 0 &&  galleryDetails.filter(val => val.category.includes(searchText)).map((data, index) => (
                                <div className='col-md-3 img mb-2' onClick={() => openImageFun(index)}>
                                    <img class="card-img-top" height={200}  src={`images/${data.path}`} alt=""/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    // onCloseRequest="yes"
                    enableZoom={true}
                    mainSrc={`images/${galleryDetails[photoIndex].path}`}
                    nextSrc={galleryDetails[(photoIndex + 1) % galleryDetails.length]}
                    prevSrc={galleryDetails[(photoIndex + galleryDetails.length - 1) % galleryDetails.length]}
                    onCloseRequest={() => { document.body.classList.remove('hidden-sidebar'); this.setState({ isOpen: false }) }}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + galleryDetails.length - 1) % galleryDetails.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleryDetails.length)}
                />
            )}
        </div>
    );
}

export default ImageGalleryComponentThree;
