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
        { label: "Our School", path: "/about" },
        { label: "Our History", path: "/about#ourhistory" },
        { label: "Our Management", path: "/about#management" },
        { label: "Our Vision & Mision", path: "/about#visionmission" },
        { label: "Our Message Desk", path: "/about#messagedesk" },
      ],
    },
    { type: "navlink", label: "Academics", path: "/academics" },
    { type: "navlink", label: "Infrastructure", path: "/infrastructure" },
    { type: "navlink", label: "Gallery", path: "/gallery" },
    { type: "navlink", label: "CBSE", path: "/cbse" },
    { type: "navlink", label: "Admissions", path: "/admissions" },
    { type: "navlink", label: "Achievements", path: "/achievements" },
    { type: "navlink", label: "Careers", path: "/careers" },
    { type: "navlink", label: "Alumni", path: "/alumni" },
    { type: "navlink", label: "Tender", path: "/tender" },
    { type: "navlink", label: "Blogs", path: "/blogs" },
  ],
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-6 2xl:px-[calc(100%-97%)] py-5 flex items-center justify-between">
      {/* Left - Logo and School Name */}
      <div className="flex items-center gap-3">
        <img src={config.logoUrl} alt="School Logo" className="w-12 2xl:w-16" />
        <span className="max-w-36 2xl:max-w-52 text-sm 2xl:text-lg font-bold leading-none">
          {config.schoolName}
        </span>
      </div>
      {/* Mobile Menu Button */}
      <button className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      {/* Desktop - Navigation Links */}
      <div className="hidden xl:flex space-x-4 2xl:text-lg">
        {config.navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-blue-50 shadow-md rounded-lg flex flex-col gap-y-2 items-center xl:hidden py-5 font-semibold z-10">
          {config.navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      )}
      {/* Right - Buttons */}
      <div className="hidden xl:flex flex-col gap-2 font-bold">
        <button className="p-3 xl:text-xs rounded-lg border border-blue-300 flex items-center gap-1">
          <img src="/Vector.svg" alt="" className="h-4"/>
          Download brochure
        </button>
        <button className="bg-[#167AC6] text-white text-xs p-3 rounded">
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
          className="flex items-center gap-1"
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
              <a
                key={i}
                href={route.path}
                className="block px-4 py-2"
              >
                {route.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink to={item.path} className="hover:font-semibold">
      {item.label}
    </NavLink>
  );
};

export default Navbar;
