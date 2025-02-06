/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';
import Navbar from "../../Components/Navbar/Navbar";
import { Slide } from "react-awesome-reveal";
import Helmet from "../../Helmet/Helmet";
import { useTranslation } from "react-i18next";
import axios from 'axios'
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

  
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleFileChang = (e) => {
    const file = e.target.files[0];
    if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setPreview(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    setPreview(URL.createObjectURL(file)); 
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

  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, photo: e.target.files[0] });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formCar = new FormData();
    // formCar.append('itemName', e.target.name.value);
    // formCar.append('itemPrice', e.target.name.value);
    // formCar.append('category', e.target.name.value);
    // formCar.append('color', e.target.name.value);
    // formCar.append('photo', image);

    try {
        axios.post()
        console.log(formData);

    } catch (error) {
      console.error('Error fetching data:', error);

    }
    alert("Item saved successfully!");
    // navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title='add-item'>
      <div className="app" onClick={closeSidebar}>
        {/* <div className="discount-buttons">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ar')}>العربية</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
          <button onClick={() => changeLanguage('de')}>Deutsch</button>
          <button onClick={() => changeLanguage('fr')}>Français</button>
        </div> */}
    <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <Slide direction="left" duration={1500}>
    <header className="header1" >
        <h1>{t('add.Add new item')}</h1>
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t('add.Item Name')}<span className="required">*</span></label>
            <input
              type="text"
              name='itemName'
              placeholder={t('add.Item Name')}
              required
              value={formData.itemName}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="form-group">
            <label>{t('add.Item Price')}<span className="required">*</span></label>
            <input
              type="number"
              name="itemPrice"
              placeholder={t('add.Item Price')}
              required
              value={formData.itemPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>{t('add.Choose category')}</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">{t('add.Select category')}</option>
              <option value="Bouquets">{t('add.Bouquets')}</option>
              <option value="Indoor Plants">{t('add.Indoor Plants')}</option>
              <option value="Sunflowers">{t('add.Sunflowers')}</option>
            </select>
          </div>
          <div className="form-group">
            <label>{t('add.Select item colors')}</label>
            <select
              name="color"
              value={formData.color}
              onChange={handleInputChange}
            >
              <option value="">{t('add.Select color')}</option>
              <option value="Red">{t('add.Red')}</option>
              <option value="Yellow">{t('add.Yellow')}</option>
              <option value="Pink">{t('add.Pink')}</option>
            </select>
          </div>
         
    <div style={{ margin: '20px',display:'inline-flex',alignItems:'center'}}>
      <label className="upload-label">       
      {t('add.Upload item photo')}
      </label>
      <label  htmlFor="file-upload"
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
          <button type="submit" className="save-button">{t('add.Save')}</button>
        </form>
      </div>
      </Slide>
    </div>
    </Helmet>
  );
}

export default AddItemPage;
