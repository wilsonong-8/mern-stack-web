import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  number: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState);
  const {user, isLoading, alertType, showAlert, displayAlert,registerUser,loginUser } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, password, isMember } = values;
    if (!email || !password || (!isMember && (!name || !number))) {
      displayAlert();
      return;
    }
    const currentUser = {name,email,password,number}
    if(isMember){
      loginUser(currentUser)
    }
    else {
     registerUser(currentUser)
    }
  };

  useEffect(()=> {
    if(alertType === 'success'){
      setTimeout(()=>{
        navigate('/landing')
      },2000)
    }
  })

  useEffect(()=>{
if(user){
  setTimeout(()=>{
    navigate('/')
  },2000)
}
  },[user,navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}

        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* Mobile Number */}
        {!values.isMember && (
          <FormRow
            type="tel"
            name="number"
            labelText="Contact Number"
            value={values.number}
            handleChange={handleChange}
          />
        )}
        {/* password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};



export default Register;
