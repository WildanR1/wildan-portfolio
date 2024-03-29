import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { TbBrandGraphql, TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { BiLogoBootstrap, BiLogoTailwindCss } from "react-icons/bi";
import { SiApollographql, SiFigma } from "react-icons/si";

const CarouselScroll = () => {
  return (
    <section className="relative text-primary h-[192px]">
      <div className="absolute w-full overflow-hidden pb-10 bg-background dark:bg-lm-background z-[1]">
        <div className="text-center font-extrabold py-5 text-xl">
          Tech Stack
        </div>
        <div className="overflow-hidden whitespace-nowrap inline-flex items-center mx-auto">
          <div className="animate-scroll flex">
            <div className="mx-10">
              <IoLogoHtml5 size={80} />
            </div>
            <div className="mx-10">
              <IoLogoCss3 size={80} />
            </div>
            <div className="mx-10">
              <IoLogoJavascript size={80} />
            </div>
            <div className="mx-10">
              <BiLogoBootstrap size={80} />
            </div>
            <div className="mx-10">
              <BiLogoTailwindCss size={80} />
            </div>
            <div className="mx-10">
              <IoLogoReact size={80} />
            </div>
            <div className="mx-10">
              <TbBrandNextjs size={80} />
            </div>
            <div className="mx-10">
              <TbBrandRedux size={80} />
            </div>
            <div className="mx-10 flex items-center">
              <div className="text-5xl font-extrabold">{"{ REST:API }"}</div>
            </div>
            <div className="mx-10">
              <TbBrandGraphql size={80} />
            </div>
            <div className="mx-10">
              <SiApollographql size={80} />
            </div>
            <div className="mx-10">
              <SiFigma size={80} />
            </div>
          </div>
          <div className="animate-scroll flex">
            <div className="mx-10">
              <IoLogoHtml5 size={80} />
            </div>
            <div className="mx-10">
              <IoLogoCss3 size={80} />
            </div>
            <div className="mx-10">
              <IoLogoJavascript size={80} />
            </div>
            <div className="mx-10">
              <BiLogoBootstrap size={80} />
            </div>
            <div className="mx-10">
              <BiLogoTailwindCss size={80} />
            </div>
            <div className="mx-10">
              <IoLogoReact size={80} />
            </div>
            <div className="mx-10">
              <TbBrandNextjs size={80} />
            </div>
            <div className="mx-10">
              <TbBrandRedux size={80} />
            </div>
            <div className="mx-10 flex items-center">
              <div className="text-5xl font-extrabold">{"{ REST:API }"}</div>
            </div>
            <div className="mx-10">
              <TbBrandGraphql size={80} />
            </div>
            <div className="mx-10">
              <SiApollographql size={80} />
            </div>
            <div className="mx-10">
              <SiFigma size={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselScroll;
