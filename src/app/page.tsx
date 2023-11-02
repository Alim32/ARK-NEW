import Image from 'next/image';
import { ScrollVisibility } from '@/components/ScrollVisibility'

export default function Home() {
    return (
        <>
            <ScrollVisibility>
                <div className='container h-100 w-100 mx-auto'>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-white text-center ls-wide my-5 mt-4">
                            <span className='text-white-30 mr-[1rem]'>$</span>
                            <span>100,000</span>
                            <span className='text-white-30'>.60</span>
                        </h1>
                        <h4 className='text-white ls-wide'>11 <span className='ml-[11px] text-white-30'>NFT(s)</span></h4>
                        <Image
                            className="w-100 h-100 object-fit-contain mt-10 pt-5"
                            src={"/images/arc_main.png"}
                            width={1600}
                            height={1000}
                            alt="ARC ARK"
                        />
                    </div>
                </div>
            </ScrollVisibility>
        </>
    );
}
