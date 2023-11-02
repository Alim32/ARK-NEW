import { ScrollVisibility } from '../ScrollVisibility';
import TabsTeam from '../TabsTeam/TabsTeam';

const OurTeam = () => {
  return (
    <div className='bg-white py-5 lg:py-20 !pb-0'>
      <ScrollVisibility>
        <div className='container text-center'>
          <h2 className='h2 mb-8'>Our team</h2>
          <TabsTeam />
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default OurTeam;
