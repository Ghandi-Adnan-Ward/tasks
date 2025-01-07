/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';
import Navbar from "./Navbar";
import { Slide } from "react-awesome-reveal";
import "./App.css";
import Helmet from "./Helmet/Helmet";
function AddItemPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    itemName: "",
    itemPrice: "",
    category: "",
    color: "",
    photo: null,
  });

  const handleFileChang = (e) => {
    const file = e.target.files[0];
    if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setPreview(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    setPreview(URL.createObjectURL(file)); // Generate a preview URL
    setFormData({ ...formData, photo: e.target.files[0] });


     }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    if (isSidebarOpen) setSidebarOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Item saved successfully!");
    navigate("/");
  };

  return (
    <Helmet title='add-item'>
      <div className="app" onClick={closeSidebar}>
     <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <Slide direction="left" duration={1500}>
    <header className="header1" >
        <h1>Add new item</h1>
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Item Name<span className="required">*</span></label>
            <input
              type="text"
              name="itemName"
              placeholder="exp: Tulips"
              required
              value={formData.itemName}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="form-group">
            <label>Item Price<span className="required">*</span></label>
            <input
              type="number"
              name="itemPrice"
              placeholder="exp: $10"
              required
              value={formData.itemPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Choose category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select category</option>
              <option value="Bouquets">Bouquets</option>
              <option value="Indoor Plants">Indoor Plants</option>
              <option value="Sunflowers">Sunflowers</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select item colors</label>
            <select
              name="color"
              value={formData.color}
              onChange={handleInputChange}
            >
              <option value="">Select color</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Pink">Pink</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label>Upload item photo</label>
            <input type="file" onChange={handleFileChange} />
          </div> */}
           {/* <div className="form-group" style={{ textAlign: 'center', margin: '20px' }}>
      <label style={{ display: 'block', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        Upload item photo
      </label>
      <input
        type="file"
        onChange={handleFileChang}
        style={{
          display: 'block',
          margin: '0 auto',
          cursor: 'pointer',
          fontSize: '14px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '6px 12px',
        }}
      />
      {preview && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          />
        </div>
      )}
    </div> */}
    <div style={{ margin: '20px',display:'inline-flex',alignItems:'center'}}>
      <label className="upload-label">       
         Upload item photo
      </label>
      <label  htmlFor="file-upload" // style={{color:'#70706f',cursor:'pointer'}}
              >
        <UploadIcon className="upload-image" size={30} color="red" />
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChang}
        style={{ display: 'none'}}
        accept="image/png, image/jpg, image/jpeg"
      />
      </div>

      {preview!=null ? (
        <div style={{ marginTop: '20px' }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              display: 'block',
              margin: '10px auto',
              cursor: 'pointer',
              padding: '6px 12px',
              width: '250px',
              height: '250px',
              objectFit: 'cover',
            }}
          />
        </div>
      )
      :
      (
        <div style={{ marginTop: '20px' }}>
          <i
            src={preview}
            style={{
              display: 'block',
              margin: '10px auto',
              padding: '6px 12px',
              width: '250px',
              height: '250px',
              objectFit: 'cover',
            }}
          />
        </div>
      )
    }
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
      </Slide>
    </div>
    </Helmet>
  );
}

export default AddItemPage;
