"use client";

import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  let { scrollY } = useScroll();

  return (
    <motion.nav
      initial={{ backgroundColor: "transparent" }}
      className="fixed top-0 w-screen z-10"
      style={{ backgroundColor: `rgba(0, 0, 0, ${scrollY.get()})` }}
    >
      <div className="navbar xl:max-w-[1366px] flex justify-between m-auto px-4 2xl:px-0">
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
        <div className="flex-none">
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
    </motion.nav>
  );
};

export default Navbar;
