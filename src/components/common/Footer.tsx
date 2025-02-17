import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Youtube,
} from "lucide-react";

// Quick Links Configuration
const quickLinksConfig = [
  { name: "About Us", href: "/about" },
  { name: "Why Airforce", href: "/why-airforce" },
  {
    name: "Download Brochure",
    href: "/assets/school-brochure.pdf",
    isDownload: true,
  },
  { name: "Transport Policy", href: "/transport" },
  { name: "Careers", href: "/careers" },
  { name: "Admissions", href: "/admissions" },
  { name: "Blogs", href: "/blogs" },
  { name: "Locations", href: "/locations" },
];

// Get in Touch Configuration
const getInTouchConfig = {
  block1: [
    {
      icon: Phone,
      primaryText: "080 25272232/25276920",
      href: "tel:08025272232",
    },
    {
      icon: MapPin,
      primaryText: "NAL WIND TUNNEL ROAD, BENGALURU – 560 017",
      href: "https://maps.google.com/?q=NAL+WIND+TUNNEL+ROAD+BENGALURU",
    },
    {
      icon: Mail,
      primaryText: "afaste@yahoo.co.in",
      href: "mailto:afaste@yahoo.co.in",
    },
  ],
  block2: [
    {
      icon: Phone,
      primaryText: "080-25401812/25400010",
      href: "tel:08025401812",
    },
    {
      icon: MapPin,
      primaryText: "AKASH VIHAR CAMP, OPP BRAND FACTORY, BENGALURU – 560 037",
      href: "https://maps.google.com/?q=AKASH+VIHAR+CAMP+BENGALURU",
    },
    {
      icon: Mail,
      primaryText: "airforceschool.avc@gmail.com",
      href: "mailto:airforceschool.avc@gmail.com",
    },
  ],
};

// Social Media Configuration
const socialMediaConfig = [
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://facebook.com/airforceschool",
    isVisible: true,
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://instagram.com/airforceschool",
    isVisible: true,
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/airforceschool",
    isVisible: true,
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/company/airforceschool",
    isVisible: false,
  },
  {
    icon: Youtube,
    name: "YouTube",
    href: "https://youtube.com/c/airforceschool",
    isVisible: false,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinksConfig.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    download={link.isDownload}
                    className="text-gray-600 hover:text-[#167AC6] transition duration-150 ease-in-out"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="col-span-2">
            <h3 className="text-gray-900 text-lg font-semibold mb-4">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Block 1 */}
              <div className="space-y-4">
                {getInTouchConfig.block1.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-3">
                      <item.icon className="w-5 h-5 mt-1 flex-shrink-0 text-[#167AC6]" />
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-[#167AC6] transition duration-150 ease-in-out"
                      >
                        <p>{item.primaryText}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Block 2 */}
              <div className="space-y-4">
                {getInTouchConfig.block2.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start space-x-3">
                      <item.icon className="w-5 h-5 mt-1 flex-shrink-0 text-[#167AC6]" />
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-[#167AC6] transition duration-150 ease-in-out"
                      >
                        <p>{item.primaryText}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-[#737373] font-bold text-xl">
              Made With Love By Palnesto
            </p>
            <p className="text-gray-500">
              © {new Date().getFullYear()} .
              <a href="/privacy" className="hover:text-[#167AC6]">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#167AC6] ml-2">
                Terms & Conditions
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            {socialMediaConfig
              .filter((social) => social.isVisible)
              .map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#167AC6] hover:text-blue-700 transition duration-150 ease-in-out"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
