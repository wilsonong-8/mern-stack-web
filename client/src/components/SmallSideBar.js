import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';

import NavLinks from './NavLinks';
import Logo from './Logo';

const SmallSideBar = () => {
  const { showSideBar, toggleSideBar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSideBar={toggleSideBar} />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSideBar;
