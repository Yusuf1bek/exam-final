import Person1 from "@/assets/images/person1.png";
import Person2 from "@/assets/images/person2.png";
import Person3 from "@/assets/images/person3.png";
import Person4 from "@/assets/images/person4.png";

const Dress = () => {
  return (
    <section>
      <div className="container">
        <div className="p-[70px] bg-[#F0F0F0] rounded-xl">
          <h2 className="text-center font-[700] text-[32px] sm:text-[48px] leading-[40px] sm:leading-[57px] mb-[40px] sm:mb-[64px]">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:gap-[20px] mb-[20px]">
            <div className="w-full sm:w-[30%] p-[20px] rounded-2xl bg-white text-black text-center sm:text-left">
              <span className="font-[700] text-[24px] sm:text-[36px] leading-[32px] sm:leading-[48px]">Casual</span>
              <img src={Person1} alt="Casual" className="w-full sm:w-[400px] mt-4" />
            </div>
            <div className="w-full sm:w-[70%] p-[20px] rounded-2xl bg-white text-black text-center sm:text-left">
              <span className="font-[700] text-[24px] sm:text-[36px] leading-[32px] sm:leading-[48px]">Formal</span>
              <img src={Person2} alt="Formal" className="w-full sm:w-[480px] mt-4 sm:ml-[80px]" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:gap-[20px]">
            <div className="w-full sm:w-[70%] p-[20px] rounded-2xl bg-white text-black text-center sm:text-left">
              <span className="font-[700] text-[24px] sm:text-[36px] leading-[32px] sm:leading-[48px]">Party</span>
              <img src={Person3} alt="Party" className="w-full sm:w-[480px] mt-4 sm:ml-[80px]" />
            </div>
            <div className="w-full sm:w-[30%] p-[20px] rounded-2xl bg-white text-black text-center sm:text-left">
              <span className="font-[700] text-[24px] sm:text-[36px] leading-[32px] sm:leading-[48px]">Gym</span>
              <img src={Person4} alt="Gym" className="w-full sm:w-[400px] mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dress;
