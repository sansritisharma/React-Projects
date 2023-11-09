import { useState } from "react";
import './App.css';
import Carousel from "./Carousel/carousel";
import "./Carousel/carousel.css";


function App() {

  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    
  ];

  return (
    <div className="App">
      <Carousel images={images}/>
    </div>
  );
}

export default App;
