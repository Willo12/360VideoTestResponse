import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
type NavLineProps = {
  List: string;
  Href: string;
};

const NavLine = ({ List, Href }: NavLineProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const [textWidth, setTextWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (linkRef.current) {
      setTextWidth(linkRef.current.offsetWidth + 20);
    }
  }, []);

  return (
    <div className="w-auto">
      <Link
        className="w-auto"
        to={Href}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        ref={linkRef}
      >
        {List}

        <div
          className={`rounded-xl  absolute h-2 ${
            isOpen ? "bg-blue-600 " : "bg-blue-500"
          } transition-all duration-500 `}
          style={{ width: isOpen ? textWidth : "0" }}
        />
      </Link>
    </div>
  );
};

export default NavLine;
