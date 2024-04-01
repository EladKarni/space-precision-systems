import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 flex justify-center p-4 2xl:px-0 w-screen">
      <div className="container px-10 py-2 flex flex-col md:flex-row w-full gap-6 justify-between lg:py2 lg:px-0 place-items-center">
        <aside className="text-center md:text-left flex flex-col md:flex-row md:items-end gap-4">
          <Link href="/" className="overflow-hidden">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={128}
              color="white"
              className="-my-16"
            />
          </Link>
          <p>
            Space Precision Systems Inc.
            <br />
            Founded 2023
          </p>
        </aside>
        <nav className="flex text-center gap-2 italic">
          <a className="link link-hover">Terms of use</a>
          <span>|</span>
          <a className="link link-hover">Privacy policy</a>
          <span>|</span>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
