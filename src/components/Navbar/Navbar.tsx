"use client";

import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  let { scrollY } = useScroll();
  const [navBackgroundColor, setNavBackgroundColor] = useState("transparent");
  const [navBackgroundOpacity, setNavBackgroundOpacity] = useState(1);

  useMotionValueEvent(scrollY, "change", () => {
    setNavBackgroundColor(scrollY.get() > 150 ? "#1d212c" : "transparent");
    setNavBackgroundOpacity(scrollY.getVelocity() > 0 ? 0 : 1);
  });

  return (
    <motion.nav
      className="fixed top-0 w-screen z-10 duration-300 transition-all ease-in-out py-2"
      style={{
        backgroundColor: navBackgroundColor,
        opacity: navBackgroundOpacity,
      }}
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
              <Link href={"/"}>Systems</Link>
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
