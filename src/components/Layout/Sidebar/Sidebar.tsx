"use client";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <nav className="sidebar">
            <div className="flex flex-col items-start justify-start">
                <Image
                    alt="ARK Logo"
                    width={100}
                    height={35}
                    className="brand-img" src="/images/logo.png"
                />
                <a id='tabhome' className={`menu-item mt-[75px] mb-3 ${pathname == "/" ? "active" : ""}`} href="/">Home</a>
                <a id='tabbridge' className={`menu-item my-3 ${pathname == "/bridge" ? "active" : ""}`} href="/bridge">Bridge</a>
                <a id='tablegacy' className={`menu-item my-3 ${pathname == "/legacy" ? "active" : ""}`} href="/legacy">Legacy NFT</a>
                {/*<a id='tabmarketplace' className={`menu-item my-3 ${pathname == "/marketplace" ? "active" : ""}`} href="/marketplace">Marketplace</a>                
                <a id='tabnetwork' className={`menu-item my-3 ${pathname == "/network" ? "active" : ""}`} href="/network">Network</a>*/}
                <a id='tabbank1' className={`menu-item my-3`} href="https://bank.arkfi.io" target="_blank">Buy Crypto</a>
                <a id='tabbank2' className={`menu-item my-3`} href="https://bank.arkfi.io/cards" target="_blank">Crypto Cards</a>
                <a id='tabmenu' className={`menu-item my-3 ${pathname == "/menu" ? "active" : ""}`} href="/menu">Menu</a>
            </div>
        </nav>
    );
};

export default Sidebar;