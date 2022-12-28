import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex md:flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <Image
            className="w-25 h-25 object-contain cursor-pointer"
            width={50}
            height={50}
            src="/images/EldenRing-lg.png"
            alt=""
          />
        </Link>
        <ul className=" flex  md:inline-flex items-center space-x-5">
          <li>
            <Link
              className="duration-400 hover:bg-green-800 hover:text-white transition-all rounded-full  px-4 py-1"
              href="/about"
            >
              Party
            </Link>
          </li>
          <li>
            <Link
              className="duration-400 hover:text-white hover:bg-green-800 rounded-full transition-all  px-4 py-1"
              href="/contacts"
            >
              Contact
            </Link>
          </li>
         
        </ul>
      </div>
      <div className="hidden md:flex items-center space-x-5 text-green-800">
        <button>Sign In</button>
        <button className="border px-4 py-1 rounded-full border-green-800">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
