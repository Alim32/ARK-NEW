import Image from 'next/image';
import Link from "next/link";
import btnIconPlusCircle from "../../images/icons/icon-plus-circle-outline.svg";
import { ScrollVisibility } from '../ScrollVisibility';

const EnterpriseBusinessPackages = () => {
  return (
    <div className='section-gradient bg-white py-20 mt-[75px]'>
      <div className='container'>
          <div className='flex md:flex-row flex-col justify-between items-center'>
            <div className='flex flex-col'>
              <h2 className='h2 mb-2 md:mb-4'>
                Enterprise & Business packages
              </h2>
              <p>We offer ideal setups and customized packages for enterprises and businesses. Contact us to learn more.</p>
            </div>
            <Link href="#form" className="btn-orange inline-flex gap-3 w-100 items-center max-h-[45px]">
              Get in touch
              <Image
                src={btnIconPlusCircle}
                width={24}
                alt="icon-plus-circle-outline"
                className="mb-[1px]"
              />
            </Link>
          </div>         
      </div>
    </div>
  );
};

export default EnterpriseBusinessPackages;