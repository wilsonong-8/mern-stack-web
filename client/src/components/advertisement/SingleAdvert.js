import Wrapper from '../../assets/wrappers/SingleAdvert';
import { useAppContext } from '../../context/appContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductImages from './ProductImages';
import MapContainer from './MapContainer';
import GeoCoding from './GeoCoding';
import axios from 'axios';

const SingleAdvert = () => {
  const { toggleShowSingleAdvert, adverts, singleAdvertId, user } =
    useAppContext();

  const navigate = useNavigate();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const {
    // _id,
    address,
    unitType,
    area,
    postalCode,
    size,
    price,
    description,
    imageSourceNames,
    createdBy,
    // createdAt,
  } = adverts.find((advert) => advert._id === singleAdvertId);

  useEffect(() => {
    handleGetLatLng();
  }, []);

  const handleGetLatLng = async () => {
    try {
      const { latitude, longitude } = await GeoCoding(postalCode);
      if (latitude && longitude) {
        setLatitude(latitude);
        setLongitude(longitude);
      } else {
        // Set default values here or take other appropriate action
        // For example, setting Singapore coordinates
        setLatitude(1.29027);
        setLongitude(103.851959);
      }
    } catch (error) {
      // Handle the error here
      console.error('Error fetching latitude and longitude:', error);
      // Set default values here or take other appropriate action
      // For example, setting Singapore coordinates
      setLatitude(1.29027);
      setLongitude(103.851959);
    }
  };
  

  const createConversation = async () => {
    try {
      const conversation = await axios.get(
        `/api/v1/conversation/${user._id}/${createdBy}`
      );
      if (conversation) {
        navigate('/chat-page');
      }
    } catch (error) {
      const { data } = await axios.post('/api/v1/conversation', {
        senderId: user._id,
        receiverId: createdBy,
      });
      const conversationId = data.newConversation._id;
      console.log(conversationId);

      navigate('/chat-page');
    }
  };

  return (
    <Wrapper>
      <header>
        <ProductImages images={imageSourceNames} />
      </header>
      <section className="content">
        <h2 className="title">{address}</h2>

        <div className="title">
          {latitude && longitude ? ( // Check if latitude and longitude are available
            <>
              {/* <p>{latitude} + {longitude}</p> */}
              <MapContainer latitude={latitude} longitude={longitude} />
            </>
          ) : (
            <div>Loading map...</div>
          )}
        </div>

        <h5>Unit Type: {unitType}</h5>
        <h5>Area: {area}</h5>
        <h5>Size: {size + " sqft"}</h5>
        <h5>Price:{"$" +price}</h5>

        <p className="sub-title">Description</p>
        <p className="desc">{description}</p>
      </section>

      <footer>
        {user._id !== createdBy && (
          <button
            type="button"
            className="btn edit-btn"
            onClick={() => createConversation()}
          >
            Chat with Seller
          </button>
        )}

        <button
          type="button"
          className="btn"
          onClick={() => toggleShowSingleAdvert()}
        >
          Back
        </button>
      </footer>
    </Wrapper>
  );
};

export default SingleAdvert;
