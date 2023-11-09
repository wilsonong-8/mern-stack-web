import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/Agent';

const Agent = ({
  _id,
  agent_name,
  agent_company,
  agent_position,
  agent_email,
  agent_image,
}) => {
  const { setEditAgent, deleteAgent, user } = useAppContext();

  const isAdmin = user.isAdmin;

  return (
    <Wrapper>
      <header>
        <img src={agent_image} alt="agent" className="main-icon" />
        <div className="info">
          <h5>{agent_name}</h5>
          <h5>{agent_company}</h5>
          <h5>{agent_position}</h5>
        </div>
      </header>
      <div className="content">
        <h5 className="email">{agent_email}</h5>
        {isAdmin && (
          <footer>
            <div className="actions">
              <Link
                to="/property-agent"
                className="btn edit-btn"
                onClick={() => setEditAgent(_id)}
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => deleteAgent(_id, agent_image)}
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
export default Agent;
