"use client";
import Image from "next/image";
import Link from "next/link";
import btnIconPlusCircle from "../../images/icons/icon-plus-circle-outline.svg";
import imageStarterKit from "../../images/hardware/image-starter-kit.png";
import { ScrollVisibility } from "../ScrollVisibility";

const HeroHardware = () => {
  return (
    <div className="section-gradient relative overflow-hidden hero-section">
      <div className="container relative z-20">
        <div className="relative isolate">
          <div className="pt-32 pb-32 sm:pt-48 sm:pb-40">
            <ScrollVisibility>
              <div className="flex md:flex-row flex-col justify-between w-[100%]">
                <div className="text-start max-w-2xl">
                  <h1 className="h1">
                    The <span className="font-light">Earn</span>
                    <br />
                    <span className="font-light">Starter Kit</span>
                    <br />
                    Is Here
                  </h1>
                  <p className="mt-6 text-xl text-darker-orange leading-8">
                    Brace yourself for an extraordinary journey. Our innovative
                    Earn Starter Kit equips you with the tools to unlock the
                    full potential of our network and start earning our native
                    KONE token.
                  </p>
                  <div className="mt-10 flex items-center justify-start gap-x-6">
                    <Link href="#form" className="btn-orange inline-flex gap-3">
                      Buy now
                      <Image
                        src={btnIconPlusCircle}
                        width={24}
                        alt="icon-brick-wall-outline"
                        className="mb-[1px]"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex md:justify-start justify-center">
                  <Image
                    src={imageStarterKit}
                    height={500}
                    alt="icon-brick-wall-outline"
                    className="mb-[1px]"
                  />
                </div>
              </div>
            </ScrollVisibility>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHardware;
