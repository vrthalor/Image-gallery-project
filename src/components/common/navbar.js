import React, { useEffect, useState } from 'react';
// import './App.css';
import { Link } from "react-router-dom";
function Navbar(props) {
    const {selected, setSelected} = useState(0)
    const [name, setName] = useState("")
    useEffect(() => {
        setName("Demo")
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                <a className="navbar-brand" href="#">NITS Solutions</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" style={{cursor:"pointer"}}>
                        <Link to="/gallery1">
                            <a onClick={()=>setSelected(1)} style={selected == 1 ? {color:"blue"} : {color:""}} className="nav-link" >Image Gallery 1 <span className="sr-only">(current)</span></a>
                        </Link>
                        </li>
                        <li className="nav-item active" style={{cursor:"pointer"}}>
                        <Link to="gallery2">
                            <a onClick={()=>setSelected(2)} style={selected == 2 ? {color:"blue"} : {color:""}} className="nav-link" >Image Gallery 2 <span className="sr-only">(current)</span></a>
                        </Link>
                        </li>
                        {/* <li className="nav-item active">
                            <a onClick={()=>setSelected(3)} className="nav-link" >Image Gallery 3 <span className="sr-only">(current)</span></a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
