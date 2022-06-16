import React, { useState ,useEffect } from "react";


const PublicImages = () => {
  
  const[number,setNumber]=useState()
  const[categories,setCategories]=useState([])
  const[images,setImages]=useState([]);

 

  const getImgData=async(categoryId=5)=>{
    let response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${number}&category_ids=${categoryId}`,
      {
        method: "GET",
        headers: {
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
    setImages(result);
  };

   const getCategories = async() =>{
    let response = await fetch("https://api.thecatapi.com/v1/categories",
      {
        method: "GET",
        "x-api-key": "98633fd9-f085-4c5c-be9a-7a9091cd6973",
        });

    if (response.status !== 200) {
      const msg = `Something went wrong ${response.status}`;
      throw new Error(msg);
    }
    let result = await response.json();
    console.log(result);
    setCategories(result);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  }
   useEffect(() => {
    getCategories();
    getImgData();
  }, []);

  
  return (
    <>
     <div className="font-weight-bolder">Public images</div>
      <div className="container bg-dark">
        <div className="form-group row my-5">
          <div className="col-4"></div>
        <select 
      className="col-4 form-select"
      onChange={(e)=> getImgData(e.target.value)}
      >
        {categories.map((category)=>(
          <option value={category.id}>{category.name}
          </option>
        ))}
        </select> 
        <select onChange={handleNumber}  className="form-select col-0"  aria-label="Default select example">
          <option value="3">3</option>
          <option value="9">9</option>
          <option value="15">15</option>
        </select>
        
      
      <div className="col-4"></div>
      </div>
      <div className="row my-5">
        {images.map((picture)=>(
            <img src={picture.url} className="col-4"></img>
        
         ))}
      </div>
      </div>
      </> 
  );
};

export default PublicImages;
