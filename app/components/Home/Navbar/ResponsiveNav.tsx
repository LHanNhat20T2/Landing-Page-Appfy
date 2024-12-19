"use client";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handleNavShow = () => {
        setShowNav(true);
    };
    const handleNavHid = () => {
        setShowNav(false);
    };

    return (
        <div>
            <Nav openNav={handleNavShow} />
            <MobileNav showNav={showNav} closeNav={handleNavHid} />
        </div>
    );
};
export default ResponsiveNav;
