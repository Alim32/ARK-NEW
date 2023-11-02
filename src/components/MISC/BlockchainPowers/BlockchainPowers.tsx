import { ScrollVisibility } from '../ScrollVisibility';
import { mockData } from './mockData';

type IItemBlock = {
  title: string;
  text: string;
  colorText: string;
  colorTitle?: string;
  bgColor: string;
};

const ItemBlock = ({
  title,
  text,
  colorText = 'text-white',
  colorTitle = '',
  bgColor = 'bg-darker-grey',
}: IItemBlock) => {
  return (
    <div
      className={`min-w-[100%] md:min-w-[45%] xl:min-w-[250px] flex-1 p-5 xl:px-5 xl:py-7 rounded-3xl ${bgColor}`}
    >
      <h3
        className={`text-1xl md:text-2xl xl:text-3xl mb-2 md:mb-5 xl:mb-10 font-semibold ${colorTitle}`}
      >
        {title}
      </h3>
      <p className={`text-sm md:text-base ${colorText}`}>{text}</p>
    </div>
  );
};

const BlockchainPowers = () => {
  return (
    <div className='bg-white py-20'>
      <ScrollVisibility>
        <div className='container'>
          <h2 className='h2 text-left mb-10 lg:mb-14'>
            Blockchain powers
            <br />
            <span className='color-orange'> in your palm </span>
          </h2>
          <div className='flex flex-wrap gap-6'>
            {mockData.map((item, index) => {
              return <ItemBlock key={index} {...item} />;
            })}
          </div>
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default BlockchainPowers;
