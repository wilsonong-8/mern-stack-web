import { useAppContext } from '../../context/appContext';
import Loading from '../Loading';
import Agent from './Agent';
import Wrapper from '../../assets/wrappers/AgentContainer';
import { useEffect } from 'react';

const AgentContainer = () => {
  const { getAgents, isLoading, agents } = useAppContext();

  useEffect(() => {
    getAgents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <div className='container'>
      <h1 className="title"> Our most trusted Agents</h1>
      <p className="desc">
        Our panel of trusted property agents are here to assist you if you
        require any assistance in your buying/selling process. With expertise in
        the local market, they'll help you through any difficultly you face,
        whether you're buying or selling. Known for their integrity and
        professionalism, our trusted agents prioritize your satisfaction.
        Countless satisfied clients have relied on them for top-notch service.
        We value strong relationships, ensuring these agents build lasting
        connections with you. Browse our list of trusted agents to embark on a
        seamless and successful real estate experience.
      </p>
      </div>
      <div className="agents">
        {agents.map((agent) => {
          return <Agent key={agent._id} {...agent} />;
        })}
      </div>
    </Wrapper>
  );
};
export default AgentContainer;
