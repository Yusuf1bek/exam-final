import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <div className="py-[10px] relative flex items-center justify-center gap-[20px] bg-black">
            <p className="text-white max-sm:text-center">Sign up and get 20% off to your first order. <Link to={"/"} className='underline'>Sign Up Now</Link></p>
            <IoClose className="text-white absolute right-[50px] text-[20px] max-sm:hidden"/>
          </div>
  )
}

export default Sign