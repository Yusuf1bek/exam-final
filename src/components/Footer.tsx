import { Link } from "react-router-dom";
import logo from "@/assets/images/SHOP.CO.png";
import social1 from "@/assets/images/social1.svg";
import social2 from "@/assets/images/social2.svg";
import social3 from "@/assets/images/social3.svg";
import social4 from "@/assets/images/social4.svg";
import payment from "@/assets/images/payments.svg";
import Contact from "@/components/Contact";

const Footer = () => {
  return (
    <>
    <Contact/>
    <footer className="mt-[50px] mb-[88px]">
      <div className="container">
        <ul className="flex flex-col lg:flex-row items-start justify-between mb-[50px] gap-8 lg:gap-0">
          <li className="w-full lg:w-[248px] text-center lg:text-left">
            <Link to="/">
              <img className="mb-[25px] mx-auto lg:mx-0" src={logo} alt="Shop.co Logo" />
            </Link>
            <p className="font-[400] text-[14px] leading-[22px] mb-[20px] lg:mb-[33px]">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-[12px]">
              <img src={social1} alt="Social 1" className="w-[32px] h-[32px] rounded-full p-1.5 border-[1px] bg-white" />
              <img src={social2} alt="Social 2" className="w-[32px] h-[32px] rounded-full p-1.5 border-[1px] bg-white" />
              <img src={social3} alt="Social 3" className="w-[32px] h-[32px] rounded-full p-1.5 border-[1px] bg-white" />
              <img src={social4} alt="Social 4" className="w-[32px] h-[32px] rounded-full p-1.5 border-[1px] bg-white" />
            </div>
          </li>
          {[
            { title: "Company", links: ["About", "Features", "Works", "Career"] },
            { title: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
            { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
            { title: "Resources", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
          ].map((section, index) => (
            <li key={index} className="flex flex-col gap-[12px] text-left max-sm:text-left">
              <strong className="font-[500] text-[16px] leading-[18px] uppercase mb-[12px] lg:mb-[20px]">
                {section.title}
              </strong>
              {section.links.map((link, idx) => (
                <span
                  key={idx}
                  className="font-[400] text-[14px] lg:text-[16px] leading-[19px] text-[#606060]"
                  >
                  {link}
                </span>
              ))}
            </li>
          ))}
        </ul>
        <hr />
        <div className="flex flex-col lg:flex-row items-center justify-between mt-[20px] gap-4 lg:gap-0 text-center lg:text-left">
          <span className="text-[12px] lg:text-[14px]">
            Shop.co © 2000-2023, All Rights Reserved
          </span>
          <img src={payment} alt="Payment Methods" className="w-[200px] lg:w-auto" />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
