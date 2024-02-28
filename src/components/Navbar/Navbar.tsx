import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link href="/" className="-my-12">
        <Image src={Logo} alt="Logo" width={200} height={128} color="white" />
      </Link>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text font-semibold">
          <li>
            <Link href={"/"}>Learn More</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
