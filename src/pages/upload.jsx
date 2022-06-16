import React,{useState} from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const handleInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    let response = await fetch(`https://api.thecatapi.com/v1/images/upload`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
       
        "x-api-key": "98633fd9-f085-4c5c-be9a-7a9091cd6973",
      },
    });
    if (response.status !== 201) {
      const msg = `Something went wrong ${response.status}`;
      throw new Error(msg);
    }
    let result = await response.json();
    console.log(result);
  };

  return (
    <>
      <div className="container mt-5 bg-dark">
        <div>
          <label htmlFor="formFileGg" className="form-label">
            {" "}
            Upload new image{" "}
          </label>
          <input
            onChange={handleInput}
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-primary mt-3"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Upload;
