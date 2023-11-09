import { SearchContainer, AdvertContainer, SingleAdvert } from "../../components";
import { useAppContext } from '../../context/appContext';

const AllAdverts = () => {
  const { showSingleAdvert } = useAppContext();


  return (
    <>
      {showSingleAdvert ? (
        <SingleAdvert />
      ) : (
        <>
          <SearchContainer />
          <AdvertContainer />
        </>
      )}
    </>
  );
};

export default AllAdverts;
