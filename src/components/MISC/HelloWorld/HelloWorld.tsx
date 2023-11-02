import { LazyVideo } from '../LazyVideo';
import { ScrollVisibility } from '../ScrollVisibility';

const HelloWorld = () => {
  return (
    <div className='bg-white py-20'>
      <ScrollVisibility>
        <div className='container text-center'>
          <h2 className='h2 mb-4'>
            Hello, <span className='color-orange'>World…?</span>
          </h2>
          <h3 className='mb-6 text-xl font-semibold'>
            Over ⅓ of the world is living without connection.
          </h3>
          <p className='subtitle max-w-4xl m-auto'>
            Remote communities and densifying cities are growing without guaranteed access to reliable connectivity. What’s more, telecom infrastructures have no sustainable way of deploying 5G networks, leaving its powerful capabilities underutilized. But we found a win-win answer.
          </p>
          <div className="max-w-[600px] m-auto">
            <LazyVideo
                className=''
                src='./video/Globe-Animation.mp4'
              />
          </div>
        </div>
      </ScrollVisibility>
    </div>
  );
};

export default HelloWorld;