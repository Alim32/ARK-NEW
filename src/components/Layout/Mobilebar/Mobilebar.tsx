'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Mobilebar = () => {
    const { push } = useRouter();

    return (
        <nav className="mobilebar">
            <div className="flex flex-row items-center justify-evenly pt-2">
                <a href={"/legacy"}>
                    <Image
                        src={"/icons/tab_nft.png"}
                        height={30}
                        width={30}
                        className='mobile-icon mb-[5px]'
                        id='mobtablegacy'
                        alt={"home"}
                    />
                </a>
                <a href={"/"}>
                    <Image 
                        src={"/icons/ark_a.svg"}
                        height={30}
                        width={30}
                        className='mobile-icon'
                        id='mobtabhome'
                        alt={"home"}
                    />
                </a>
                <a href={"/menu"}>
                    <Image
                        src={"/icons/tab_more.png"}
                        height={30}
                        width={30}
                        className='mobile-icon mb-[7px]'
                        id='mobtabmenu'
                        alt={"home"}
                    />
                </a>
            </div>
        </nav>
    );
};

export default Mobilebar;
