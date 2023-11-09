import { useState } from 'react';
import { FormRow, Alert } from '../../components';
import { useAppContext} from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading} =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [number, setNumber] = useState(user?.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    // test and remove temporary
    if (!name || !email || !number) {
      displayAlert();
      return;
    }
    updateUser({ name, email, number });
  };
   const isAdmin = user.isAdmin;

  return (
<Wrapper isAdmin={!isAdmin}>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            labelText="contact number"
            type="text"
            name="number"
            value={number}
            handleChange={(e) => setNumber(e.target.value)}
          />
          <button className='btn btn-block' type="submit" disabled={isLoading}>
            {isLoading ? "waiting..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
    
  );
};

export default Profile;
