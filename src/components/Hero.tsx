const Hero = () => {
  return (
    <section className="hero-section">
      <div className="w-[1440px] mx-auto p-[98px] hero-bg max-sm:bg-none max-sm:w-full max-sm:px-4 max-sm:py-10">
        <div className="w-[580px] max-sm:w-full">
          <h1 className="font-[800] text-[64px] leading-[64px] mb-[32px] max-sm:text-[22px] max-sm:leading-[32px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-[400] text-[16px] leading-[22px] mb-[32px] max-sm:text-[14px] max-sm:leading-[20px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mb-[48px] rounded-[24px] text-white bg-black py-[10px] w-[210px] max-sm:w-full">
            Shop now
          </button>
          <ul className="flex items-center gap-[32px] max-sm:flex-col max-sm:gap-[16px]">
            <li className="flex flex-col items-start border-r-[1px] max-sm:border-none max-sm:items-center">
              <strong className="font-[700] text-[40px] leading-[54px] mr-[85px] max-sm:mr-0 max-sm:text-[28px] max-sm:leading-[36px]">
                200+
              </strong>
              <span className="font-[400] text-[16px] leading-[22px] max-sm:text-[14px] max-sm:leading-[20px] text-center">
                International Brands
              </span>
            </li>
            <li className="flex flex-col items-start border-r-[1px] max-sm:border-none max-sm:items-center">
              <strong className="font-[700] text-[40px] leading-[54px] mr-[85px] max-sm:mr-0 max-sm:text-[28px] max-sm:leading-[36px]">
                2,000+
              </strong>
              <span className="font-[400] text-[16px] leading-[22px] max-sm:text-[14px] max-sm:leading-[20px] text-center">
                High-Quality Products
              </span>
            </li>
            <li className="flex flex-col items-start max-sm:items-center">
              <strong className="font-[700] text-[40px] leading-[54px] max-sm:text-[28px] max-sm:leading-[36px]">
                30,000+
              </strong>
              <span className="font-[400] text-[16px] leading-[22px] max-sm:text-[14px] max-sm:leading-[20px] text-center">
                Happy Customers
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
