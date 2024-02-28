import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-base-100 flex justify-center">
      <div className="navbar lg:px-0 lg:max-w-[1366px] flex justify-between">
        <Link href="/" className="-my-12 lg:-ml-2">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={128}
            color="white"
            className="-my-2"
          />
        </Link>
        <div className="flex-none lg:-mr-6">
          <ul className="menu menu-horizontal text font-semibold">
            <li>
              <Link href={"/"}>Learn More</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
