import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => {
  return (
    <div className="self-center cursor-pointer" onClick={onClick}>
      <Link href={href}>{text}</Link>
    </div>
  );
};

export default NavLink;
