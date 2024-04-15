import { UserButton, auth, useUser } from "@clerk/nextjs";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const kp = auth();

  return (
    <nav className="bg-gray-800 text-white p-4 h-[65px]">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-bold">
          Contact Canvas
        </a>

        {true ? <UserButton /> : <Link href="sign-in">Sign In</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
