import MenuItem from './MenuItem'
import { FaHome, FaInfoCircle } from "react-icons/fa";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-6 px-2 max-w-6xl mx-auto'>
            <div className="flex ">
                <MenuItem title="Home" address="/" Icon={<FaHome />} />
                <MenuItem title="About" address="/about" Icon={<FaInfoCircle />} />
            </div>
            <div className="flex items-center space-x-4">
                <DarkModeSwitch />
                <Link href={"/"}>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
                        <span className='hidden sm:inline ml-1'>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default Header
