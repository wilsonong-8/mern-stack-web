import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/Banker';

const Banker = ({
  _id,
  banker_name,
  banker_bank,
  banker_position,
  banker_email,
  banker_image,
}) => {
  const { setEditBanker, deleteBanker, user } = useAppContext();

  const isAdmin = user.isAdmin;

  return (
    <Wrapper>
      <header>
        <img src={banker_image} alt="banker" className="main-icon" />
        <div className="info">
          <h5>{banker_name}</h5>
          <h5>{banker_bank}</h5>
          <h5>{banker_position}</h5>
        </div>
      </header>
      <div className="content">
        <h5 className="email">{banker_email}</h5>
        {isAdmin && (
          <footer>
            <div className="actions">
              <Link
                to="/mortgage-banker"
                className="btn edit-btn"
                onClick={() => setEditBanker(_id)}
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => deleteBanker(_id,banker_image)}
              >
                Delete
              </button>
            </div>
          </footer>
        )}
      </div>
    </Wrapper>
  );
};
export default Banker;
