import Wrapper from '../../assets/wrappers/AdvertInfo';

const AdvertInfo = ({ icon, text2 }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text2}</span>
    </Wrapper>
  );
};
export default AdvertInfo;
