import axios from 'axios';
import { GOOGLE_API } from '../../webConfig';

const GeoCoding = async (postalCode) => {
  try {
    const response = await axios.get(
      /* Enter your GOOGLE API KEY HERE */
    );

    const { results } = response.data;

    if (results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching latitude and longitude:', error);
    return null;
  }
};

export default GeoCoding;
