import moment from 'moment';
import { useAppContext } from '../../context/appContext';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { AiFillPieChart } from 'react-icons/ai';
import { MdBedroomParent } from 'react-icons/md';
import { HiOutlinePencil } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Advert';
import AdvertInfo from './AdvertInfo';

const Advert = ({
  _id,
  address,
  unitType,
  area,
  size,
  price,
  imageSourceNames,
  createdAt,
  createdBy,
}) => {
  const { deleteAdminAdvert, user,toggleShowSingleAdvert } = useAppContext();

  const isAdmin = user.isAdmin;

  let date = moment(createdAt);
  date = date.format('Do MMM, YYYY');
  return (
    <Wrapper>
      <header>
        {/*Header for Image and Address. Image size can be changed from wrapper */}
        <img src={imageSourceNames[0]} alt="advert" className="main-icon" />
        <div className="info">
          <h5>{address}</h5>
        </div>
      </header>
      <div className="content">
        {/*Content Center can add more information as needed */}
        <div className="content-center">
          <AdvertInfo
            icon={<BiMoneyWithdraw />}
            text="price: "
            text2={'$' + price}
          />
          <AdvertInfo
            icon={<AiFillPieChart />}
            text="size: "
            text2={size + 'sqft'}
          />
          <AdvertInfo
            icon={<MdBedroomParent />}
            text="unit type: "
            text2={unitType}
          />
          <AdvertInfo
            icon={<HiOutlinePencil />}
            text="created on"
            text2={date}
          />
        </div>
        {/*TOGGLE CREATED ON DATE TO PLAY WITH SIZE SETTING */}
        {/* <h6>Created on {date}</h6> */}
      </div>
      
      <footer>
        <div className="actions">
          {/*BUTTONS SECTION for delete or chat function */}
          {isAdmin && (
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => deleteAdminAdvert(createdBy,imageSourceNames)}
            >
              Delete
            </button>
          )}
          <button
          type='button' className='btn edit-btn' onClick={()=> toggleShowSingleAdvert(_id)}>
            details
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};
export default Advert;
