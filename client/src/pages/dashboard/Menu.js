import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Menu';
import { Navbar, SmallSideBar, BigSideBar } from '../../components';

const Menu = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Menu;
