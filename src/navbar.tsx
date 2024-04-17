import NavLine from "./navline";

const Navbar = () => {
  return (
    <body className="bg-gray-900 ">
      <nav className="w-full h-16">
        <div className="w-[40rem] translate-y-3 flex">
          <ul className="text-white flex  space-x-16 mx-20 text-lg">
            <li>
              <NavLine List={"360 Video Implemntation"} Href={"/"} />
            </li>
            <li>
              <NavLine List={"About this site"} Href={"about"} />
            </li>
          </ul>
        </div>
      </nav>
    </body>
  );
};

export default Navbar;
