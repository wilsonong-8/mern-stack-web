import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';
import Loading from '../Loading';
import Advert from './Advert';
import Wrapper from '../../assets/wrappers/AdvertsContainer';
import PageBtnContainer from '../PageBtnContainer'

const AdvertContainer = () => {
  const { getAdverts, adverts, isLoading, numOfPages, totalAdverts, page } =
    useAppContext();

  useEffect(() => {
    getAdverts();
  }, [page]);
  if (isLoading) {
    return <Loading center />;
  }
  if (adverts.length === 0) {
    return (
      <Wrapper>
        <h2>No Advertisements to Display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalAdverts} Advertisement{adverts.length > 1 && 's'} found
      </h5>
      <div className="adverts">
        {adverts.map((advert) => {
          return <Advert key={advert._id} {...advert} />;
        })}
      </div>
      {/*Pagination buttons */}
      {numOfPages >1 && <PageBtnContainer/>}
    </Wrapper>
  );
};
export default AdvertContainer;
