import {
  FormRow,
  FormRowSelect,
  FormRowTextArea,
  Alert,
  FormImage,
  EditImages,
} from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useEffect } from 'react';


const MyAdvert = () => {
  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    address,
    postalCode,
    areaOptions,
    area,
    unitTypeOptions,
    unitType,
    size,
    price,
    description,
    imageSourceNames,
    imageList,
    uploadImageList,
    handleChange,
    createAdvert,
    clearAdvertFormValues,
    getUserAdvert,
    hasAdvert,
    updateAdvert,
    deleteAdvert,
    deleteSingleImage,

  } = useAppContext();

  const isAdmin = user.isAdmin;

  useEffect(() => {
      getUserAdvert();
  }, [showAlert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !address ||
      !postalCode ||
      !size ||
      !price ||
      !description ||
      !imageList
    ) {
      displayAlert();
      return;
    }
    if (hasAdvert) {
      updateAdvert();
      return
    }
      createAdvert();
  };

  /**
   * 
   * Interim bug solved by uploading image when handling image upload 
   */

  const handleImageUpload = async (e) => {

    const files = await Array.from(e.target.files); // Convert FileList to an array of files
    let length = 0;
    // console.log(files);
    if(hasAdvert) {
      length = files.length + imageSourceNames.length
    }
    else if(!hasAdvert) {
      length = files.length
    }
    console.log(length);
    await uploadImageList(files,length);
  };

  const handleAdvertInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleDeleteImage = (imageToDelete) => {
    const length = imageSourceNames.length;
    deleteSingleImage(user._id,imageToDelete,length)
  }

  return (
    <Wrapper isAdmin={!isAdmin}>
      <form className="form">
        <h3>{hasAdvert ? 'my advertisement' : 'create your advertisement'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/*address*/}
          <FormRow
            type="text"
            name="address"
            value={address}
            handleChange={handleAdvertInput}
          />

          {/*postalCode*/}
          <FormRow
            type="text"
            name="postalCode"
            value={postalCode}
            handleChange={handleAdvertInput}
          />

          {/*area*/}
          <FormRowSelect
            labelText="location"
            name="area"
            value={area}
            handleChange={handleAdvertInput}
            list={areaOptions}
          />

          {/*unitType*/}
          <FormRowSelect
            labelText="unit type"
            name="unitType"
            value={unitType}
            handleChange={handleAdvertInput}
            list={unitTypeOptions}
          />

          {/*size*/}
          <FormRow
            type="text"
            name="size"
            value={size}
            handleChange={handleAdvertInput}
          />

          {/*price*/}
          <FormRow
            type="text"
            name="price"
            value={price}
            handleChange={handleAdvertInput}
          />

          {/*description*/}
          <FormRowTextArea
            type="text"
            name="description"
            value={description}
            handleChange={handleAdvertInput}
          />

          {/*image*/}
          <FormImage type="file" name="image (Max 5 images)" multiple={true} onChange={handleImageUpload} />

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            {/* <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearAdvertFormValues();
              }}
            >
              clear
            </button> */}
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                deleteAdvert();
                clearAdvertFormValues();
              }}
            >
              delete
            </button>
          </div>
        </div>
      </form>
      <EditImages images={imageSourceNames} onDeleteImage={handleDeleteImage} />
    </Wrapper>
  );
};
export default MyAdvert;
