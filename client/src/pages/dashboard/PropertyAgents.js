import { FormRow, Alert,FormImage } from '../../components';
import { useAppContext } from '../../context/appContext';
import FormWrapper from '../../assets/wrappers/DashboardFormPage';
import { AgentContainer } from '../../components/';
import { useState } from 'react';


const PropertyAgents = () => {
  const {
    isLoading,
    isEditingAgent,
    showAlert,
    displayAlert,
    agent_name,
    agent_company,
    agent_position,
    agent_number,
    agent_email,
    agent_image,
    handleChange,
    createAgent,
    clearAgentFormValues,
    editAgent,
    uploadAgentImage,
    user,
  } = useAppContext();

  const isAdmin = user.isAdmin;

  const [agentImage, setAgentImage] = useState()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !agent_name ||
      !agent_company ||
      !agent_position ||
      !agent_number ||
      !agent_email ||
      (!agentImage && !agent_image)
    ) {
      displayAlert();
      return;
    }
    if(agentImage){
     const imageName = await uploadAgentImage(agentImage)
      if(isEditingAgent){
        editAgent(imageName);
      }
      else {
        createAgent(imageName);
      }
      return;
    }
    if (isEditingAgent) {
      editAgent(agent_image);
      return;
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files[0]
    setAgentImage(files);
    
  };

  return (
    <div>
      <FormWrapper isAdmin={isAdmin}>
        <form className="form">
          <h3>
            {isEditingAgent
              ? 'Edit Current Agent Information'
              : 'Insert New Agent Information'}
          </h3>
          {showAlert && <Alert />}
          <div className="form-center">
            {/*name */}
            <FormRow
              labelText="name"
              type="text"
              name="agent_name"
              value={agent_name}
              handleChange={handleInput}
            />
            {/*bank */}
            <FormRow
              labelText="company"
              type="text"
              name="agent_company"
              value={agent_company}
              handleChange={handleInput}
            />
            {/*position */}
            <FormRow
              labelText="position"
              type="text"
              name="agent_position"
              value={agent_position}
              handleChange={handleInput}
            />
            {/*number */}
            <FormRow
              labelText="Contact Number"
              type="text"
              name="agent_number"
              value={agent_number}
              handleChange={handleInput}
            />
            {/*email */}
            <FormRow
              labelText="email"
              type="text"
              name="agent_email"
              value={agent_email}
              handleChange={handleInput}
            />
            {/*image */}
            {/* <FormRow
              labelText="image upload"
              type="text"
              name="agent_image"
              value={agent_image}
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
                  clearAgentFormValues();
                }}
              >
                clear
              </button>
            </div>
          </div>
        </form>
      </FormWrapper>
      
      <AgentContainer />
    </div>
  );
};
export default PropertyAgents;
