import Link from "next/link";
import { Button } from "./button";
//components

import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/src/public/drum.png">
          <h1 className="text 4-xl font-semibold">
            Pablodrum <span className="text-accent-DEFALUT">.</span>
          </h1>
        </Link>

        {/*dektop nav*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <button>Hire me</button>
          </Link>
        </div>
        {/*mobile nav*/}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
