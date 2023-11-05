"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Mobilebar = () => {
    const pathname = usePathname();

    return (
        <nav className="mobilebar">
            <div className="flex flex-row items-center justify-evenly pt-2">
                <Link href={"/legacy"}>
                    <Image
                        src={"/icons/tab_nft.png"}
                        height={30}
                        width={30}
                        className={`mobile-icon mb-[5px] ${pathname == "/legacy" ? "active" : ""}`}
                        id='mobtablegacy'
                        alt={"home"}
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        src={"/icons/ark_a.svg"}
                        height={30}
                        width={30}
                        className={`mobile-icon ${pathname == "/" ? "active" : ""}`}
                        id='mobtabhome'
                        alt={"home"}
                    />
                </Link>
                <Link href={"/menu"}>
                    <Image
                        src={"/icons/tab_more.png"}
                        height={30}
                        width={30}
                        className={`mobile-icon mb-[7px] ${pathname == "/menu" ? "active" : ""}`}
                        id='mobtabmenu'
                        alt={"home"}
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Mobilebar;
