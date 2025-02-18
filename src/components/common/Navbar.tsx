import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const config = {
  logoUrl: "/logo.png",
  schoolName: "AIR FORCE SCHOOL ASTE Banglore",
  navItems: [
    { type: "navlink", label: "Home", path: "/" },
    {
      type: "navgroup",
      label: "About",
      routes: [
        { label: "Our School", path: "/about/ourschool" },
        { label: "Our History", path: "/about/ourhistory" },
        { label: "Our Management", path: "/about/management" },
        { label: "Our Vision & Mision", path: "/about/vision&mission" },
        { label: "Our Message Desk", path: "/about/messagedesk" },
      ],
    },
    { type: "navlink", label: "Why AFSE", path: "/whyAFSE" },
    { type: "navlink", label: "Admissions", path: "/admissions" },
    { type: "navlink", label: "Location", path: "/location" },
    { type: "navlink", label: "Careers", path: "/career" },
    { type: "navlink", label: "Blogs", path: "/career" },
    { type: "navlink", label: "Alumni", path: "/alumni" },
  ],
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-[calc(100%-95%)] py-5 flex items-center justify-between">
      {/* Left - Logo and School Name */}
      <div className="flex items-center gap-3">
        <img src={config.logoUrl} alt="School Logo" className="w-12" />
        <span className="max-w-36 text-sm font-bold leading-none">
          {config.schoolName}
        </span>
      </div>
      {/* Mobile Menu Button */}
      <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      {/* Desktop - Navigation Links */}
      <div className="hidden lg:flex space-x-4 text-xs">
        {config.navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-blue-50 shadow-md rounded-lg flex flex-col gap-y-2 items-center lg:hidden py-5 font-semibold z-10">
          {config.navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      )}
      {/* Right - Buttons */}
      <div className="hidden lg:flex gap-4 font-bold ">
        <button className="px-3 py-2 xl:text-xs rounded-lg border border-blue-300 flex items-center gap-1">
          <img src="/Vector.svg" alt="" className="h-4"/>
          Download brochure
        </button>
        <button className="bg-[#167AC6] text-white text-[0.55rem] px-2 rounded">
          Enquire Now/Pay Fee
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.type === "navgroup") {
    return (
      <div className="relative">
        <button
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 hover:text-gray-900"
        >
          {item.label}
          {/* <ChevronDownIcon className="h-5 w-5" /> */}
        </button>
        {open && (
          <div
            className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded shadow-lg py-2"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {item.routes.map((route, i) => (
              <NavLink
                key={i}
                to={route.path}
                className="block px-4 py-2 hover:bg-black"
              >
                {route.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink to={item.path} className="hover:font-bold">
      {item.label}
    </NavLink>
  );
};

export default Navbar;
