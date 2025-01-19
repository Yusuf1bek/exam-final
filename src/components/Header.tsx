import { useState } from "react";
import logo from "@/assets/images/SHOP.CO.svg";
import { Link } from "react-router-dom";
import Sign from "./Sign";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoPersonCircleOutline, IoCartOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <>
      <Sign />
      <header className="py-[13px] mt-[24px]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            <button
              className="lg:hidden text-[25px] z-20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
            <Link to="/">
              <img src={logo} alt="logo" width={400} className="max-sm:w-[120px]" />
            </Link>
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-[3px] left-[-20px] w-[100%] bg-white shadow-md z-10 p-4 rounded-r-lg lg:static lg:flex lg:items-center lg:gap-[30px] lg:shadow-none lg:bg-transparent`}
            >
              <li className="font-[400] text-[16px] leading-[21px] lg:mr-[4px]">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="font-[400] text-[16px] leading-[21px] flex items-center gap-[5px]">
                <p>Shop</p>
                <MdKeyboardArrowDown />
              </li>
              <li className="font-[400] text-[16px] leading-[21px]">On Sale</li>
              <li className="font-[400] text-[16px] leading-[21px]">New Arrivals</li>
              <li className="font-[400] text-[16px] leading-[21px]">Brands</li>
            </ul>
            <div className="hidden lg:block relative">
              <GoSearch className="absolute top-[10px] left-[22px] text-[22px]" />
              <input
                placeholder="Search for products..."
                type="text"
                className="pl-[60px] pr-[60px] outline-none w-[500px] bg-[#F0F0F0] rounded-[20px] py-[9px]"
              />
            </div>
            <div className="flex items-center gap-[15px] relative">
              <Link to="/cart" className="relative">
                <IoCartOutline className="text-[25px]" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-bold rounded-full w-[20px] h-[20px] flex items-center justify-center">
                  {cartItemCount}
                  </span>
              </Link>
              <IoPersonCircleOutline className="text-[25px]" />
            </div>
          </div>
          <div className="block lg:hidden mt-4">
            <div className="relative">
              <GoSearch className="absolute top-[10px] left-[22px] text-[22px]" />
              <input
                placeholder="Search for products..."
                type="text"
                className="pl-[60px] pr-[60px] outline-none w-full bg-[#F0F0F0] rounded-[20px] py-[9px]"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
