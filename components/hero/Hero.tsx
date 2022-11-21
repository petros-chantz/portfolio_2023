import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Navbar } from "../Navbar";

const Hero = () => {
  return (
    <section className="flex flex-col h-screen">
      <Navbar />
      <section className="flex flex-col justify-center px-10 lg:px-32 bg-black h-[calc(100%-128px)] py-10">
        <div className="hidden md:flex flex-col self-center justify-center h-[95%]">
          <h1 className="text-white">Hey, I&apos;m Petros!</h1>
          <h1 className="text-white">I design rich meaningful experiences</h1>
          <h1 className="text-white">
            by connecting <span className="font-semibold">design</span> &{" "}
            <span className="font-semibold">technology</span>.
          </h1>
        </div>
        <div className="flex flex-col h-[95%] md:hidden self-center justify-center gap-4">
          <h1 className="self-start text-white">Hey, I&apos;m Petros!</h1>
          <div className="flex flex-col">
            <h2 className="self-start text-white"> I design rich meaningful</h2>
            <h2 className="self-start text-white">experiences by connecting</h2>
            <h2 className="self-start text-white">
              <span className="font-semibold">design</span> &{" "}
              <span className="font-semibold">technology</span>
            </h2>
          </div>
        </div>
        <div className="flex justify-center h-5">
          <ChevronDownIcon className="self-center w-10 h-10 text-white transition ease-linear delay-1000 animate-pulse" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
