import { FormRow, Alert, FormImage } from '../../components';
import { useAppContext } from '../../context/appContext';
import FormWrapper from '../../assets/wrappers/DashboardFormPage';
import { BankerContainer } from '../../components/';
import { useState } from 'react';

const MortgageBankers = () => {
  const {
    isLoading,
    isEditingBanker,
    showAlert,
    displayAlert,
    banker_name,
    banker_bank,
    banker_position,
    banker_number,
    banker_email,
    banker_image,
    handleChange,
    createBanker,
    clearBankerFormValues,
    editBanker,
    uploadBankerImage,
    user,
  } = useAppContext();

  const isAdmin = user.isAdmin;

  const [bankerImage, setBankerImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !banker_name ||
      !banker_bank ||
      !banker_position ||
      !banker_number ||
      !banker_email ||
      (!bankerImage && !banker_image)
    ) {
      displayAlert();
      return;
    }
    if (bankerImage) {
      const imageName = await uploadBankerImage(bankerImage);
      if (isEditingBanker) {
        editBanker(imageName);
      } else {
        createBanker(imageName);
      }
      return;
    }
    if (isEditingBanker) {
      editBanker(banker_image);
      return;
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files[0];
    setBankerImage(files);
  };

  return (
    <div>
      <FormWrapper isAdmin={isAdmin}>
        <form className="form">
          <h3>
            {isEditingBanker
              ? 'Edit Current Banker Information'
              : 'Insert New Banker Information'}
          </h3>
          {showAlert && <Alert />}
          <div className="form-center">
            {/*name */}
            <FormRow
              labelText="name"
              type="text"
              name="banker_name"
              value={banker_name}
              handleChange={handleInput}
            />
            {/*bank */}
            <FormRow
              labelText="bank"
              type="text"
              name="banker_bank"
              value={banker_bank}
              handleChange={handleInput}
            />
            {/*position */}
            <FormRow
              labelText="position"
              type="text"
              name="banker_position"
              value={banker_position}
              handleChange={handleInput}
            />
            {/*number */}
            <FormRow
              labelText="Contact Number"
              type="text"
              name="banker_number"
              value={banker_number}
              handleChange={handleInput}
            />
            {/*email */}
            <FormRow
              labelText="email"
              type="text"
              name="banker_email"
              value={banker_email}
              handleChange={handleInput}
            />
            {/*image */}
            {/* <FormRow
            labelText="image upload"
            type="text"
            name="banker_image"
            value={banker_image}
            handleChange={handleInput}
          /> */}
            <FormImage
              type="file"
              name="image"
              // multiple={false}
              onChange={handleImageUpload}
            />

            <div className="btn-container">
              <button
                type="submit"
                className="btn btn-block submit-btn"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                submit
              </button>
              <button
                className="btn btn-block clear-btn"
                onClick={(e) => {
                  e.preventDefault();
                  clearBankerFormValues();
                }}
              >
                clear
              </button>
            </div>
          </div>
        </form>
      </FormWrapper>

      <BankerContainer />
    </div>
  );
};

export default MortgageBankers;
