import { MdQueryStats } from 'react-icons/md'; //FOR ALL ADVERTS
import { BsBuildingAdd } from 'react-icons/bs'; //FOR ADD ADVERTS
import { BsChatText } from 'react-icons/bs'; // FOR CHAT PAGE
import { IoBarChartSharp } from 'react-icons/io5'; // FOR PAST TRANSACTIONS
import { FaBookBookmark } from 'react-icons/fa6'; //FOR SELLING GUIDE
import { BsBank2 } from 'react-icons/bs'; // FOR MORTGAGE BANKER
import { MdRealEstateAgent } from 'react-icons/md'; //FOR REAL ESTATE AGENT
import { ImProfile } from 'react-icons/im'; // FOR PROFILE PAGE

const links = [
  {
    id: 1,
    text: 'main page',
    path: '/',
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: 'my advertisement',
    path: 'my-advert',
    icon: <BsBuildingAdd />,
  },
  {
    id: 3,
    text: 'chat history',
    path: 'chat-page',
    icon: <BsChatText />,
  },
  {
    id: 4,
    text: 'past transactions',
    path: 'past-transaction',
    icon: <IoBarChartSharp />,
  },
  {
    id: 5,
    text: 'selling guide',
    path: 'selling-guide',
    icon: <FaBookBookmark />,
  },
  {
    id: 6,
    text: 'mortgage banker',
    path: 'mortgage-banker',
    icon: <BsBank2 />,
  },
  {
    id: 7,
    text: 'property agent',
    path: 'property-agent',
    icon: <MdRealEstateAgent />,
  },
  {
    id: 8,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
