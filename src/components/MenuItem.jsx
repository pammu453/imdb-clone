import Link from 'next/link'

const MenuItem = ({ title, address, Icon }) => {
    return (
        <div>
            <Link href={address} className='mx-5 lg:mx-6 hover:text-amber-500'>
                <span className='text-2xl sm:hidden mx-4'>{Icon}</span>
                <p className='hidden sm:inline text-sm'>{title}</p>
            </Link>
        </div>
    )
}

export default MenuItem
