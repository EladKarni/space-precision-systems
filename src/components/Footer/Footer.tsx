import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 flex justify-center">
      <div className="px-10 py-4 flex w-full justify-between lg:max-w-[1366px] lg:py2 lg:px-0 place-items-center">
        <aside>
          <Link href="/" className="overflow-hidden">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={128}
              color="white"
              className="-my-14"
            />
          </Link>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="flex flex-col text-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col text-center">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col text-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
