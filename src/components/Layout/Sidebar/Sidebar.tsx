'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import $ from 

const Sidebar = () => {
    const { push } = useRouter();

    return (
        <nav className="sidebar">
            <div className="flex flex-col items-start justify-start">
                <Image
                    alt="ARK Logo"
                    width={100}
                    height={35}
                    className="brand-img" src="/images/logo.png"
                />
                <a id='tabhome' className="menu-item mt-[75px] mb-3" href="/">Home</a>
                <a id='tabvault' className="menu-item my-3 " href="/vault">Vault</a>
                <a id='tabfoundation' className="menu-item my-3 " href="/foundation">Foundation</a>
                <a id='tablegacy' className="menu-item my-3 " href="/legacy">Legacy NFT</a>
                <a id='tabnetwork' className="menu-item my-3 " href="/network">Network</a>
                <a id='tabmenu' className="menu-item my-3 " href="/menu">Menu</a>
            </div>
        </nav>
    );
};


document.addEventListener('DOMContentLoaded', function () {
    var pathname = location.pathname.replaceAll("/", "");
    pathname = pathname == "" ? "home" : pathname;

    document.getElementById(`tab${pathname}`)?.classList.add("active");
    document.getElementById(`mobtab${pathname}`)?.classList.add("active");
}, false);

export default Sidebar;
