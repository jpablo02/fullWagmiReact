import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">NFT Artist & Web3 Developer</span>
            <h1 className="h1 mb-6">
              I'am <br /> <span className="text-accent-DEFALUT">Pablo Rios</span>
            </h1>
            <p className="max-w-[500px]mb-9 text-white/80">
              I excel at crafting elegant digital experiences and i am
              proficient in various programming languages and technologies
            </p>
            {/*btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent-DEFALUT rounded-full flex justify-center items-center text-accent-DEFALUT text-base hover:bg-accent-DEFALUT hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
