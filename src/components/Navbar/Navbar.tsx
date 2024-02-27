import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className=" grow max-w-48 h-10 relative">
        <Image src="/logo.svg" alt="Logo" fill color="white" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
