import { Link } from 'react-router-dom';
import img from '../assets/images/error.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page not found</h3>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
