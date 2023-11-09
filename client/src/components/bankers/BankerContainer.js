import { useAppContext } from '../../context/appContext';
import Loading from '../Loading';
import Banker from './Banker';
import Wrapper from '../../assets/wrappers/BankerContainer';
import { useEffect } from 'react';

const BankerContainer = () => {
  const { getBankers, isLoading, bankers } = useAppContext();

  useEffect(() => {
    getBankers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <h1 className="title">Recommended Mortgage Bankers</h1>
      <p className="desc">
        Our dedicated panel of mortgage bankers is committed to helping you
        navigate the complex world of home financing. With extensive knowledge
        of the mortgage market, they strive to find the best loan options
        tailored to your unique needs and financial goals. Our mortgage
        bankers will guide you through the entire process with professionalism
        and care. Trusted for their expertise and customer-focused approach,
        they ensure a seamless and stress-free experience from application to
        closing. Secure your dream home with the support of our reliable and
        experienced mortgage bankers.{' '}
      </p>
      <div className="bankers">
        {bankers.map((banker) => {
          return <Banker key={banker._id} {...banker} />;
        })}
      </div>
    </Wrapper>
  );
};
export default BankerContainer;
