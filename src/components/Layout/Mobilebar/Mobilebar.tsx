'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Mobilebar = () => {
    const { push } = useRouter();

    return (
        <nav className="mobilebar">
            <div className="flex flex-row items-center justify-evenly">
                <a id='tabhome1' className="text-white" href="/">X</a>
                <a id='tabhome2' className="text-white" href="/legacy">Legacy</a>
                <a id='tabhome3' className="text-white" href="/">Home</a>
                <a id='tabhome4' className="text-white" href="/">X</a>
                <a id='tabhome5' className="text-white" href="/">X</a>
            </div>
        </nav>
    );
};

if (typeof window != "undefined") {
    window.onload = function (e) {
        var pathname = location.pathname.replaceAll("/", "");
        pathname = pathname == "" ? "home" : pathname;
        document.getElementById(`tab${pathname}`)?.classList.add("active");
    };
}


export default Mobilebar;
