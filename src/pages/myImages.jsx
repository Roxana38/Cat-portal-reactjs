import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyImages = () => {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/?limit=10&page=0&order=DESC",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-key": "98633fd9-f085-4c5c-be9a-7a9091cd6973",
        },
      }
    );
    if (response.status !== 200) {
      const msg = `Something went wrong ${response.status}`;
      throw new Error(msg);
    }
    let result = await response.json();
    console.log(result);
    setAllImages(result);
  };
  const handleRemove = async (Id) => {
    let response = await fetch(`https://api.thecatapi.com/v1/images/${Id}`, {
      method: "DELETE",
      headers: {
         "x-api-key": "98633fd9-f085-4c5c-be9a-7a9091cd6973",
      },
    });
    if (response.status !== 204) {
      const msg = `Something went wrong ${response.status}`;
      throw new Error(msg);
    }
    getImages();
  };

  return (
    <>
      <div className="font-weight-bolder">My sweets cats</div>

      <div className="row my-5">
        <div className="col-2"></div>
        <Carousel className="col-8" 
          autoPlay
          infiniteLoop
          interval={3000}
        >
          {allImages.map((img) => (
            <div key={img.id}>
              <img src={img.url} alt="ceva" className="carousel-image"/>
              
              <button
              className="legend"
                onClick={() => handleRemove(img.id)}
                
              >
                Remove
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MyImages;
